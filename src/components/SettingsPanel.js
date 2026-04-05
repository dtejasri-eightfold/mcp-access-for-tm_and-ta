import React from 'react';
import { Settings, Bell, Target, User } from 'lucide-react';
import './SettingsPanel.css';

const SettingsPanel = ({ 
  userPreferences, 
  onPreferencesChange, 
  userGoals, 
  careerMindset,
  onUpdateGoals 
}) => {
  const handlePreferenceChange = (key, value) => {
    const newPreferences = { ...userPreferences, [key]: value };
    onPreferencesChange(newPreferences);
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <Settings size={24} />
        <h3>CareerAgent Settings</h3>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h4>Notifications</h4>
          <div className="setting-item">
            <label className="setting-label">
              <input 
                type="checkbox" 
                checked={userPreferences.notifications}
                onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
              />
              <Bell size={20} />
              <span>Enable notifications</span>
            </label>
          </div>
          <div className="setting-item">
            <label className="setting-label">
              <input 
                type="checkbox" 
                checked={userPreferences.reminders}
                onChange={(e) => handlePreferenceChange('reminders', e.target.checked)}
              />
              <Target size={20} />
              <span>Enable reminders</span>
            </label>
          </div>
          <div className="setting-item">
            <label className="setting-label">
              <input 
                type="checkbox" 
                checked={userPreferences.followUps}
                onChange={(e) => handlePreferenceChange('followUps', e.target.checked)}
              />
              <Bell size={20} />
              <span>Enable follow-up suggestions</span>
            </label>
          </div>
        </div>
        
        <div className="settings-section">
          <h4>Personalization</h4>
          <div className="setting-item">
            <label className="setting-label">
              <input 
                type="checkbox" 
                checked={userPreferences.personalizedSuggestions}
                onChange={(e) => handlePreferenceChange('personalizedSuggestions', e.target.checked)}
              />
              <Target size={20} />
              <span>Personalized suggestions</span>
            </label>
          </div>
        </div>
        
        <div className="settings-section">
          <h4>Career Goals</h4>
          <div className="goal-info">
            <div className="goal-item">
              <strong>Current Goal:</strong> {userGoals || 'Not set'}
            </div>
            <div className="goal-item">
              <strong>Current Mindset:</strong> {careerMindset || 'Not set'}
            </div>
            <button 
              className="update-goals-btn"
              onClick={onUpdateGoals}
            >
              <User size={16} />
              Update Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;


