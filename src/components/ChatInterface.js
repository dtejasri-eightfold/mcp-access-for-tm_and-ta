import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Send, Plus } from 'lucide-react';
import MessageBubble from './MessageBubble';
import './ChatInterface.css';

const ChatInterface = ({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  isTyping,
  activeSession,
  onNewSession,
  messagesEndRef
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="session-info">
          <h3>{activeSession ? 'CareerAgent' : 'Select a conversation'}</h3>
          <span className="session-time">
            {activeSession ? new Date().toLocaleTimeString() : ''}
          </span>
        </div>
        <div className="chat-actions">
          <button 
            className="action-btn"
            onClick={onNewSession}
            title="New Conversation"
          >
            <Plus size={16} />
            New Chat
          </button>
        </div>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <Bot size={48} className="empty-icon" />
            <h3>Start a conversation</h3>
            <p>Ask me anything about your career development, goals, or challenges.</p>
            <div className="suggestions">
              <button 
                className="suggestion-btn"
                onClick={() => onSendMessage("Help me create a career development plan")}
              >
                Create a development plan
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => onSendMessage("Find me a mentor")}
              >
                Find a mentor
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => onSendMessage("What skills should I develop?")}
              >
                Skill recommendations
              </button>
            </div>
          </div>
        ) : (
          <div className="messages-list">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MessageBubble message={message} />
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="typing-indicator"
              >
                <div className="typing-avatar">
                  <Bot size={20} />
                </div>
                <div className="typing-content">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="typing-text">CareerAgent is thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your career..."
            className="message-input"
            disabled={!activeSession}
          />
          <button 
            type="submit"
            disabled={!inputValue.trim() || !activeSession}
            className="send-button"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;


