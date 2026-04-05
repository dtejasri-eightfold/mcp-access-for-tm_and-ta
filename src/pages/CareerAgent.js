import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './CareerAgent.css';

const BACKEND_URL = 'http://localhost:3001';

const CareerAgent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
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
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Error: ${err.message}` },
      ]);
      historyRef.current = [...currentHistory, { role: 'assistant', content: `Error: ${err.message}` }];
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="simple-chat">
      <div className="simple-chat-header">
        <Bot size={22} />
        <span>Career Agent</span>
      </div>

      <div className="simple-chat-messages">
        {messages.length === 0 && (
          <div className="simple-chat-empty">
            <Bot size={40} />
            <p>Hi! I'm your career development agent.<br />Ask me anything to get started.</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`simple-msg ${msg.role}`}>
            <div className="simple-msg-avatar">
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="simple-msg-bubble">
              {msg.role === 'assistant'
                ? <ReactMarkdown>{msg.content}</ReactMarkdown>
                : msg.content}
            </div>
          </div>
        ))}

        {isTyping && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="simple-msg assistant">
            <div className="simple-msg-avatar"><Bot size={16} /></div>
            <div className="simple-msg-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form className="simple-chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={isTyping}
          autoFocus
        />
        <button type="submit" disabled={!input.trim() || isTyping}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default CareerAgent;
