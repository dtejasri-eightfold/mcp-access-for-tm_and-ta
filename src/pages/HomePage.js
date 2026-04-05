import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageCircle, 
  Target, 
  Users, 
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const features = [
    {
      icon: <MessageCircle size={32} />,
      title: 'AI-Powered Chat',
      description: 'Get personalized career guidance through intelligent conversations'
    },
    {
      icon: <Target size={32} />,
      title: 'Goal Setting',
      description: 'Define and track your career objectives with smart recommendations'
    },
    {
      icon: <Users size={32} />,
      title: 'Mentorship',
      description: 'Connect with mentors who can guide your career journey'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Progress Tracking',
      description: 'Monitor your career development with detailed insights'
    }
  ];

  const benefits = [
    'Personalized career guidance based on your goals',
    'Smart recommendations for skill development',
    'Mentorship connections and networking',
    'Progress tracking and milestone setting',
    'Context-aware suggestions and reminders'
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="hero-icon">
            <Bot size={80} />
          </div>
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">CareerAgent</span>
          </h1>
          <p className="hero-description">
            Your AI-powered career guidance system. Get personalized advice, 
            connect with mentors, and accelerate your professional growth.
          </p>
          <div className="hero-actions">
            <Link to="/agent" className="btn-primary">
              <MessageCircle size={20} />
              Start Your Career Journey
              <ArrowRight size={20} />
            </Link>
            <button className="btn-secondary">
              <Lightbulb size={20} />
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-header"
          >
            <h2>Powerful Features</h2>
            <p>Everything you need to advance your career</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="feature-card"
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="benefits-content"
          >
            <div className="benefits-text">
              <h2>Why Choose CareerAgent?</h2>
              <p>
                CareerAgent combines artificial intelligence with career expertise 
                to provide you with personalized guidance that adapts to your unique 
                goals and circumstances.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + 0.1 * index }}
                  >
                    <CheckCircle size={20} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="benefits-visual">
              <div className="floating-card">
                <Bot size={40} />
                <h4>AI Assistant</h4>
                <p>Always available to help</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of professionals who are already using CareerAgent to advance their careers.</p>
            <Link to="/agent" className="btn-primary large">
              <MessageCircle size={24} />
              Get Started Now
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


