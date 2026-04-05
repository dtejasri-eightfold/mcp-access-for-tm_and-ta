import React from 'react';
import { motion } from 'framer-motion';
import { Bell, X, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import './NotificationCenter.css';

const NotificationCenter = ({ notifications, onNotificationClick, onClose }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'mentorship':
        return Users;
      case 'reminder':
        return Calendar;
      case 'deadline':
        return Target;
      case 'recommendation':
        return TrendingUp;
      default:
        return Bell;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#666';
    }
  };

  return (
    <div className="notification-center">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      
      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="no-notifications">
            <Bell size={48} className="no-notifications-icon" />
            <h3>No notifications</h3>
            <p>You're all caught up!</p>
          </div>
        ) : (
          notifications.map(notification => {
            const Icon = getNotificationIcon(notification.type);
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => onNotificationClick(notification)}
              >
                <div className="notification-icon">
                  <Icon size={20} />
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4 className="notification-title">{notification.title}</h4>
                    <div 
                      className="priority-indicator"
                      style={{ backgroundColor: getPriorityColor(notification.priority) }}
                    />
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-meta">
                    <span className="notification-time">
                      {notification.timestamp.toLocaleDateString()}
                    </span>
                    <span className="notification-type">{notification.type}</span>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;


