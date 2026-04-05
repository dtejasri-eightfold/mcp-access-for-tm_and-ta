import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Archive, 
  Trash2, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import './SessionSidebar.css';

const SessionSidebar = ({
  sessions,
  activeSession,
  onSessionSelect,
  onNewSession,
  onDeleteSession,
  onArchiveSession,
  searchQuery,
  onSearchChange,
  sessionFilter,
  onFilterChange
}) => {
  return (
    <div className="session-sidebar">
      <div className="sidebar-header">
        <h3>Conversations</h3>
        <button 
          className="new-session-btn"
          onClick={onNewSession}
          title="New Conversation"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="sidebar-controls">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-container">
          <Filter size={16} className="filter-icon" />
          <select 
            value={sessionFilter} 
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="growth">Growth</option>
            <option value="mentorship">Mentorship</option>
            <option value="learning">Learning</option>
            <option value="job_search">Job Search</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>
      
      <div className="sessions-list">
        {sessions.length === 0 ? (
          <div className="no-sessions">
            <MessageCircle size={32} className="no-sessions-icon" />
            <p>No conversations found</p>
            <button 
              className="start-conversation-btn"
              onClick={onNewSession}
            >
              Start New Conversation
            </button>
          </div>
        ) : (
          sessions.map(session => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`session-item ${activeSession === session.id ? 'active' : ''} ${session.status}`}
              onClick={() => onSessionSelect(session.id)}
            >
              <div className="session-header">
                <div className="session-title">{session.title}</div>
                <div className="session-actions">
                  <button 
                    className="session-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onArchiveSession(session.id);
                    }}
                    title="Archive"
                  >
                    <Archive size={14} />
                  </button>
                  <button 
                    className="session-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSession(session.id);
                    }}
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              
              <div className="session-preview">{session.lastMessage}</div>
              
              <div className="session-tags">
                {session.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="session-tag">{tag}</span>
                ))}
                {session.tags.length > 2 && (
                  <span className="session-tag-more">+{session.tags.length - 2}</span>
                )}
              </div>
              
              <div className="session-meta">
                <span className="session-time">{session.timestamp.toLocaleDateString()}</span>
                <div className="session-status">
                  {session.status === 'completed' && <CheckCircle size={12} className="status-completed" />}
                  {session.status === 'archived' && <Archive size={12} className="status-archived" />}
                  {session.unreadCount > 0 && (
                    <span className="unread-badge">{session.unreadCount}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default SessionSidebar;


