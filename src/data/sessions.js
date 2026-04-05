// Mock data for CareerAgent chat sessions
export const mockSessions = [
  {
    id: 'session-1',
    title: 'Career Growth Planning',
    lastMessage: 'Let me help you create a personalized promotion plan.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unreadCount: 0,
    type: 'growth',
    tags: ['promotion', 'leadership', 'skills'],
    status: 'active',
    messages: []
  },
  {
    id: 'session-2', 
    title: 'Mentorship Request',
    lastMessage: 'I found 3 potential mentors for your role transition.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    unreadCount: 2,
    type: 'mentorship',
    tags: ['mentorship', 'networking', 'guidance'],
    status: 'active',
    messages: []
  },
  {
    id: 'session-3',
    title: 'Skill Development',
    lastMessage: 'Here are the courses I recommend for your Python skills.',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    unreadCount: 0,
    type: 'learning',
    tags: ['courses', 'skills', 'development'],
    status: 'completed',
    messages: []
  },
  {
    id: 'session-4',
    title: 'Job Search Strategy',
    lastMessage: 'Let\'s explore opportunities in your target companies.',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    unreadCount: 1,
    type: 'job_search',
    tags: ['jobs', 'opportunities', 'strategy'],
    status: 'active',
    messages: []
  }
];

export const createNewSession = (title, type = 'general') => {
  return {
    id: `session-${Date.now()}`,
    title: title || 'New Conversation',
    lastMessage: '',
    timestamp: new Date(),
    unreadCount: 0,
    type,
    tags: [],
    status: 'active',
    messages: []
  };
};


