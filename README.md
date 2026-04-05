# CareerAgent - AI Career Guidance System

A modern, AI-powered career guidance application built with React. CareerAgent provides personalized career advice, mentorship connections, and development planning through an intelligent chat interface.

## 🚀 Features

### Core Features
- **AI-Powered Chat Interface**: Intelligent conversations about career development
- **Personalized Guidance**: Tailored advice based on user goals and mindset
- **Session Management**: Save, organize, and revisit conversations
- **Smart Notifications**: Proactive reminders and recommendations
- **Mentorship Connections**: Find and connect with relevant mentors
- **Progress Tracking**: Monitor career development milestones

### User Experience
- **Lightweight Onboarding**: Quick setup with minimal required information
- **Context-Aware Suggestions**: Smart prompts based on current page/context
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Mode Support**: Automatic theme switching
- **Real-time Updates**: Live notifications and status updates

## 🛠️ Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Notifications**: React Hot Toast for user feedback
- **Build Tool**: Create React App

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd career-agent-app

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

## 🎯 Usage

### Getting Started
1. **First Visit**: Complete the lightweight onboarding to set your career goals and mindset
2. **Chat Interface**: Start conversations with the AI career agent
3. **Session Management**: Organize your conversations by topic or goal
4. **Notifications**: Stay updated with proactive career guidance
5. **Settings**: Customize your experience and preferences

### Key Features

#### Chat Interface
- Start new conversations with the AI agent
- Get personalized career advice and recommendations
- Access contextual actions and follow-ups
- Save and organize chat sessions

#### Session Management
- Create multiple conversation threads
- Search and filter sessions
- Archive or delete old sessions
- Tag sessions for easy organization

#### Notifications
- Receive proactive career guidance
- Get deadline reminders
- Stay updated on mentorship requests
- View personalized recommendations

#### Settings & Personalization
- Customize notification preferences
- Update career goals and mindset
- Manage personal information
- Control AI behavior and suggestions

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ChatInterface.js    # Main chat interface
│   ├── MessageBubble.js    # Individual message display
│   ├── SessionSidebar.js   # Session management sidebar
│   ├── OnboardingModal.js  # First-time user setup
│   ├── NotificationCenter.js # Notification management
│   └── SettingsPanel.js    # User preferences
├── pages/               # Main application pages
│   ├── HomePage.js         # Landing page
│   └── CareerAgent.js      # Main career agent interface
├── data/                # Mock data and services
│   ├── sessions.js         # Chat session data
│   ├── notifications.js    # Notification data
│   └── userProfiles.js     # User profile data
├── styles/              # Global styles
│   ├── index.css           # Base styles
│   └── App.css             # App-specific styles
└── hooks/               # Custom React hooks
```

## 🎨 Design System

### Color Palette
- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Success**: #4caf50 (Green)
- **Warning**: #ff9800 (Orange)
- **Error**: #f44336 (Red)
- **Neutral**: #666, #999, #ccc

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Headings**: 700 weight, 1.2-3.5rem
- **Body**: 400 weight, 0.9-1.1rem
- **Captions**: 500 weight, 0.75-0.85rem

### Components
- **Buttons**: Gradient backgrounds, hover animations
- **Cards**: Subtle shadows, rounded corners
- **Inputs**: Focus states, validation feedback
- **Modals**: Backdrop blur, smooth animations

## 🔧 Development

### Available Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
```

### Code Style
- ESLint configuration for React
- Prettier for code formatting
- Consistent naming conventions
- Component-based architecture

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_ENVIRONMENT=production
```

### Deployment Options
- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Zero-config deployment with GitHub integration
- **AWS S3**: Static website hosting
- **Heroku**: Container-based deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- The open-source community for inspiration

## 📞 Support

For support, email support@careeragent.com or join our Slack channel.

---

**CareerAgent** - Empowering careers through AI guidance 🚀


