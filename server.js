const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// ============================================================
// Load MCP_TOKEN and SYSTEM_PROMPT from src/config.js
// ============================================================
function loadConfig() {
  const raw = fs.readFileSync(path.join(__dirname, 'src', 'config.js'), 'utf8');
  const tokenMatch = raw.match(/export const MCP_TOKEN\s*=\s*["'`]([\s\S]*?)["'`]\s*;/);
  const promptMatch = raw.match(/export const SYSTEM_PROMPT\s*=\s*`([\s\S]*?)`;/);
  return {
    MCP_TOKEN: tokenMatch ? tokenMatch[1].trim() : '',
    SYSTEM_PROMPT: promptMatch ? promptMatch[1].trim() : '',
  };
}

const { MCP_TOKEN, SYSTEM_PROMPT } = loadConfig();

// ============================================================
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  // Build prompt from conversation history
  let promptText;
  if (messages.length === 1) {
    promptText = messages[0].content;
  } else {
    const history = messages
      .slice(0, -1)
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n\n');
    const latest = messages[messages.length - 1].content;
    promptText = `[Previous conversation]\n${history}\n\n[Current message]\n${latest}`;
  }

  const mcpConfig = JSON.stringify({
    mcpServers: {
      tm: {
        type: 'http',
        url: 'https://mcp.eightfold.ai/mcp/',
        headers: { Authorization: `Bearer ${MCP_TOKEN}` },
      },
    },
  });

  const args = [
    '-p',
    '--verbose',
    '--output-format', 'stream-json',
    '--model', 'claude-haiku-4-5-20251001',
    '--dangerously-skip-permissions',
    '--no-session-persistence',
    '--mcp-config', mcpConfig,
    '--strict-mcp-config',
    '--system-prompt', SYSTEM_PROMPT,
    promptText,
  ];

  const env = { ...process.env };
  delete env.ANTHROPIC_API_KEY;

  const child = spawn('claude', args, { env });
  let buffer = '';

  child.stdout.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const event = JSON.parse(line);
        // result event carries the final answer
        if (event.type === 'result' && event.subtype === 'success' && event.result) {
          res.json({ content: event.result });
        }
      } catch {
        // not a JSON line we care about
      }
    }
  });

  child.stderr.on('data', (data) => {
    console.error('claude stderr:', data.toString().slice(0, 200));
  });

  child.on('close', (code) => {
    if (code !== 0 && !res.headersSent) {
      res.status(500).json({ error: `claude exited with code ${code}` });
    }
  });

  child.on('error', (err) => {
    console.error('spawn error:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  });

  res.on('close', () => child.kill());
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\nCareer Agent server → http://localhost:${PORT}`);
  console.log(`MCP Token : ${MCP_TOKEN ? '✓ loaded' : '✗ MISSING'}`);
  console.log(`System Prompt: ${SYSTEM_PROMPT ? '✓ loaded' : '✗ MISSING'}\n`);
});
