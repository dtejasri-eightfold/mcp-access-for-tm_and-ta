import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';
import './OnboardingModal.css';

const OnboardingModal = ({ isOpen, onClose, onComplete }) => {
  const [userGoals, setUserGoals] = useState(null);
  const [careerMindset, setCareerMindset] = useState(null);

  const goals = [
    { id: 'growth', label: 'Growth in current role', icon: TrendingUp },
    { id: 'explore', label: 'Explore new opportunities', icon: Target },
    { id: 'stability', label: 'Focus on stability', icon: CheckCircle },
    { id: 'transition', label: 'Career transition', icon: Users }
  ];

  const mindsets = [
    { id: 'growth-oriented', label: 'Growth-oriented' },
    { id: 'exploration-driven', label: 'Exploration-driven' },
    { id: 'stability-focused', label: 'Stability-focused' },
    { id: 'transition-ready', label: 'Transition-ready' }
  ];

  const handleComplete = () => {
    if (userGoals && careerMindset) {
      onComplete(userGoals, careerMindset);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="onboarding-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="onboarding-modal"
          >
            <div className="onboarding-content">
              <div className="welcome-header">
                <Bot size={48} className="agent-icon" />
                <h2>Welcome to CareerAgent</h2>
                <p>I'm your personal career guide, here to help you grow and achieve your professional goals.</p>
              </div>
              
              <div className="onboarding-form">
                <div className="form-section">
                  <h3>What's your primary career goal right now?</h3>
                  <div className="goal-options">
                    {goals.map(goal => (
                      <button 
                        key={goal.id}
                        className={`goal-option ${userGoals === goal.label ? 'selected' : ''}`}
                        onClick={() => setUserGoals(goal.label)}
                      >
                        <goal.icon size={24} />
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <h3>How would you describe your current mindset?</h3>
                  <div className="mindset-options">
                    {mindsets.map(mindset => (
                      <button 
                        key={mindset.id}
                        className={`mindset-option ${careerMindset === mindset.label ? 'selected' : ''}`}
                        onClick={() => setCareerMindset(mindset.label)}
                      >
                        {mindset.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    onClick={handleComplete}
                    disabled={!userGoals || !careerMindset}
                    className="complete-btn"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;


