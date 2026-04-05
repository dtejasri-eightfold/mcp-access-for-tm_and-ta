// Mock user profile data for CareerAgent personalization
export const getPersonalizedGreeting = (userGoals, careerMindset, userName = 'there') => {
  const greeting = {
    greeting: `Hi ${userName}! I'm your CareerAgent, here to guide your professional growth.`,
    context: '',
    nextSteps: '',
    actions: []
  };
  
  if (userGoals === 'Growth in current role' && careerMindset === 'Growth-oriented') {
    greeting.context = "I see you're focused on growing in your current role with a growth-oriented mindset.";
    greeting.nextSteps = "I can help you create a personalized development plan and connect you with mentors who've successfully advanced in similar roles.";
    greeting.actions = ['create_plan', 'find_mentor', 'skill_development'];
  } else if (userGoals === 'Explore new opportunities' && careerMindset === 'Exploration-driven') {
    greeting.context = "You're in exploration mode, looking for new opportunities.";
    greeting.nextSteps = "I can help you identify potential career paths, find relevant opportunities, and connect you with people who've made similar transitions.";
    greeting.actions = ['explore_roles', 'find_opportunities', 'networking'];
  } else if (userGoals === 'Focus on stability' && careerMindset === 'Stability-focused') {
    greeting.context = "I understand you're looking for stability and consistent growth.";
    greeting.nextSteps = "I can help you strengthen your current position, develop specialized skills, and build long-term career security.";
    greeting.actions = ['skill_development', 'career_security', 'mentoring_others'];
  } else {
    greeting.context = "I'm here to help guide your career journey.";
    greeting.nextSteps = "Let me know what you'd like to focus on today - whether it's career planning, skill development, or exploring new opportunities.";
    greeting.actions = ['explore_goals', 'skill_development', 'find_mentor'];
  }
  
  return greeting;
};


