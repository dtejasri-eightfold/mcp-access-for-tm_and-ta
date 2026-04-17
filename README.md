# Career Agent

An AI-powered career development assistant built with React and the Claude CLI. Helps employees explore career paths, build development plans, close skill gaps, and find open roles — grounded in their actual Eightfold profile data via MCP.

## How it works

```
React frontend → Express server → claude CLI (OAuth) → Anthropic API + Eightfold MCP
```

On load, the agent automatically fetches the employee's profile and opens with a personalized summary: current role, skills, what's changed lately, active focus areas, and suggested next steps.

## Stack

- **Frontend** — React, ReactMarkdown, remark-gfm, lucide-react
- **Server** — Node.js, Express
- **AI** — Claude CLI (`claude-haiku-4-5`) via OAuth (no API key required)
- **Tools** — Eightfold TM MCP server over HTTP

## Setup

### Prerequisites

- Node.js 18+
- [Claude CLI](https://claude.ai/code) installed and logged in (`claude login`)
- A valid Eightfold MCP Bearer token

### Install

```bash
npm install
```

### Configure

Edit `src/config.js`:

```js
// MCP Bearer token (update when expired — exp: 2026-04-28)
export const MCP_TOKEN = "your-token-here";

// System prompt — controls agent behavior
export const SYSTEM_PROMPT = `...`;
```

### Run

In two separate terminals:

```bash
# Terminal 1 — backend
npm run server

# Terminal 2 — frontend
npm start
```

Open http://localhost:3000.

## Authentication

This project uses the Claude CLI's **OAuth session** rather than an `ANTHROPIC_API_KEY`. The server spawns the `claude` CLI as a subprocess and strips the API key from the environment, forcing the CLI to use your logged-in account (`~/.claude/`).

This means:
- No API key needed
- Usage is billed against your Claude account
- The CLI must be logged in before starting the server (`claude login`)

## MCP Tools available

The agent has access to the following Eightfold TM MCP tools:

| Tool | Description |
|------|-------------|
| `skill_proficiencies` | Employee skill levels and ratings |
| `career_paths` | Recommended career path options |
| `upskilling_plan` | Active development plans |
| `jobs_search` | Search open internal roles |
| `job_alerts` | Manage job alert subscriptions |
| `course_search` | Find learning courses |
| `roles` | Role details and requirements |
| `projects` | Project assignments |
| `connections` | People and mentors |
| `notification_settings` | Alert preferences |

## Project structure

```
career-agent-app/
├── server.js              # Express server — spawns claude CLI per request
├── src/
│   ├── config.js          # MCP token + system prompt
│   ├── pages/
│   │   ├── CareerAgent.js # Main chat component
│   │   └── CareerAgent.css
│   └── styles/
│       └── index.css
└── public/
```

## Available scripts

```bash
npm start        # Start React frontend (port 3000)
npm run server   # Start Express backend (port 3001)
npm run build    # Production build
npm run lint     # Run ESLint
```
