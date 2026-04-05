import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import './MessageBubble.css';

const MessageBubble = ({ message }) => {
  const isUser = message.type === 'user';
  const Icon = isUser ? User : Bot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`message-bubble ${isUser ? 'user' : 'ai'}`}
    >
      <div className="message-avatar">
        <Icon size={20} />
      </div>
      <div className="message-content">
        <div className="message-text">
          {message.content}
        </div>
        {message.actions && message.actions.length > 0 && (
          <div className="message-actions">
            {message.actions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="action-button"
                onClick={() => {
                  // Handle action click
                  console.log('Action clicked:', action.type);
                }}
              >
                {action.icon && <action.icon size={16} />}
                {action.label}
              </motion.button>
            ))}
          </div>
        )}
        <div className="message-time">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;


