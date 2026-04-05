import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Briefcase, Plus, Sparkles, Send, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './CareerAgent.css';

const BACKEND_URL = 'http://localhost:3001';

const SUGGESTIONS = [
  { title: 'Explore career paths', body: 'What roles could I grow into from my current position?' },
  { title: 'Build a development plan', body: 'Help me create a plan to develop my skills this quarter.' },
  { title: 'Find open roles', body: 'Show me internal jobs that match my background.' },
  { title: 'Close skill gaps', body: 'What skills should I focus on for my target role?' },
];

const CareerAgent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef([]);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }, [input]);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isTyping) return;

    const userMsg = { role: 'user', content: text };
    const currentHistory = [...historyRef.current, userMsg];
    historyRef.current = currentHistory;
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: currentHistory }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');

      const assistantMsg = { role: 'assistant', content: data.content };
      historyRef.current = [...currentHistory, assistantMsg];
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errMsg = { role: 'assistant', content: `Something went wrong: ${err.message}` };
      setMessages((prev) => [...prev, errMsg]);
      historyRef.current = [...currentHistory, errMsg];
    } finally {
      setIsTyping(false);
    }
  }, [isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    historyRef.current = [];
    setInput('');
  };

  return (
    <div className="chat-app">
      {/* ── Sidebar ── */}
      <aside className="chat-sidebar">
        <div className="sidebar-brand">
          <Briefcase size={17} />
          Career Agent
        </div>

        <button className="new-chat-btn" onClick={handleNewChat}>
          <Plus size={14} />
          New chat
        </button>

        <div className="sidebar-divider" />

        <div className="sidebar-label">Model</div>
        <div className="sidebar-model">
          <Cpu size={13} />
          claude-haiku
        </div>

        <div className="sidebar-footer">
          Powered by Eightfold AI
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="chat-main">
        <header className="chat-topbar">
          <span className="topbar-title">Career Agent</span>
          <span className="topbar-model">claude-haiku-4-5</span>
        </header>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-empty">
              <div className="chat-empty-heading">
                What would you like to<br />
                <span>work on today?</span>
              </div>
              <div className="suggestions-grid">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.title}
                    className="suggestion-card"
                    onClick={() => sendMessage(s.body)}
                  >
                    <strong>{s.title}</strong>
                    {s.body}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="messages-inner">
              {messages.map((msg, i) =>
                msg.role === 'user' ? (
                  <div key={i} className="msg-row user">
                    <div className="msg-user-bubble">{msg.content}</div>
                  </div>
                ) : (
                  <div key={i} className="msg-row assistant">
                    <div className="msg-avatar">
                      <Sparkles size={14} />
                    </div>
                    <div className="msg-assistant-content">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                )
              )}

              {isTyping && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="typing-row">
                  <div className="msg-avatar">
                    <Sparkles size={14} />
                  </div>
                  <div className="typing-dots">
                    <span /><span /><span />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          )}

          {messages.length === 0 && <div ref={bottomRef} />}
        </div>

        {/* ── Input ── */}
        <div className="chat-input-wrap">
          <div className="chat-input-inner">
            <form className="chat-input-box" onSubmit={handleSubmit}>
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message Career Agent..."
                disabled={isTyping}
                autoFocus
              />
              <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
                <Send size={15} />
              </button>
            </form>
            <p className="input-hint">Career Agent can make mistakes. Verify important information.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerAgent;
