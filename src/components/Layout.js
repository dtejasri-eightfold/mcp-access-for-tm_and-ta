import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Home, 
  MessageCircle, 
  Bell, 
  Settings,
  User,
  TrendingUp
} from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAgentPage = location.pathname.includes('/agent');

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <Bot size={28} className="logo-icon" />
            <span className="logo-text">CareerAgent</span>
          </Link>
          
          <nav className="header-nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/agent" 
              className={`nav-link ${isAgentPage ? 'active' : ''}`}
            >
              <MessageCircle size={20} />
              <span>CareerAgent</span>
            </Link>
          </nav>

          <div className="header-actions">
            <button className="action-btn">
              <Bell size={20} />
            </button>
            <button className="action-btn">
              <Settings size={20} />
            </button>
            <button className="action-btn">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CareerAgent</h4>
            <p>AI-powered career guidance system</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Personalized Career Guidance</li>
              <li>Mentorship Connections</li>
              <li>Development Planning</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CareerAgent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


