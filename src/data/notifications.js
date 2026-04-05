// Mock data for CareerAgent notifications
export const mockNotifications = [
  {
    id: 'notif-1',
    title: 'Mentor Request Accepted',
    message: 'Sarah Johnson accepted your mentorship request',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    type: 'mentorship',
    priority: 'high',
    action: 'view_chat',
    sessionId: 'session-2',
    read: false,
    metadata: {
      mentorName: 'Sarah Johnson',
      mentorRole: 'Senior Product Manager',
      mentorId: 'mentor-123'
    }
  },
  {
    id: 'notif-2',
    title: 'Progress Check-in',
    message: 'It\'s been 2 weeks since you started your promotion plan',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    type: 'reminder',
    priority: 'medium',
    action: 'review_progress',
    sessionId: 'session-1',
    read: false,
    metadata: {
      planId: 'plan-456',
      progressPercentage: 35
    }
  },
  {
    id: 'notif-3',
    title: 'New Course Recommendation',
    message: 'Based on your goals, I found a new leadership course that might interest you',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    type: 'recommendation',
    priority: 'low',
    action: 'view_course',
    sessionId: null,
    read: true,
    metadata: {
      courseId: 'course-789',
      courseTitle: 'Advanced Leadership Skills',
      courseProvider: 'LinkedIn Learning'
    }
  },
  {
    id: 'notif-4',
    title: 'Deadline Reminder',
    message: 'Your promotion application deadline is in 3 days',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    type: 'deadline',
    priority: 'high',
    action: 'view_application',
    sessionId: 'session-1',
    read: false,
    metadata: {
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      applicationId: 'app-101'
    }
  }
];


