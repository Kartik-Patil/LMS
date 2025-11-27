import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import './Sessions.css';

const Sessions = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day'); // day, week, month

  const sessions = [
    {
      id: 1,
      courseName: 'Cyber Security and Privacy',
      courseCode: '23ECSE454',
      instructor: 'Dr. Rajesh Kumar',
      time: '09:00 AM - 10:30 AM',
      room: 'Room 301, Block A',
      type: 'Lecture',
      status: 'upcoming',
    },
    {
      id: 2,
      courseName: 'Social Network Analysis',
      courseCode: '23ECSE452',
      instructor: 'Prof. Anita Sharma',
      time: '11:00 AM - 12:30 PM',
      room: 'Room 205, Block B',
      type: 'Lab',
      status: 'upcoming',
    },
    {
      id: 3,
      courseName: 'CIPE (Audit)',
      courseCode: '15EHSA401',
      instructor: 'Dr. Priya Verma',
      time: '02:00 PM - 03:30 PM',
      room: 'Room 410, Block C',
      type: 'Lecture',
      status: 'upcoming',
    },
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="sessions-page">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>Sessions</span>
      </div>

      <div className="sessions-header">
        <h1>Class Sessions</h1>
        <div className="view-controls">
          <button 
            className={`view-btn ${viewMode === 'day' ? 'active' : ''}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button 
            className={`view-btn ${viewMode === 'week' ? 'active' : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button 
            className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
        </div>
      </div>

      <div className="date-selector">
        <CalendarIcon size={20} />
        <span className="selected-date">{formatDate(selectedDate)}</span>
      </div>

      <div className="sessions-content">
        {sessions.length > 0 ? (
          <div className="sessions-list">
            {sessions.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-time-badge">
                  <Clock size={16} />
                  <span>{session.time}</span>
                </div>
                <div className="session-details">
                  <div className="session-header-info">
                    <h3>{session.courseName}</h3>
                    <span className={`type-badge ${session.type.toLowerCase()}`}>
                      {session.type}
                    </span>
                  </div>
                  <p className="course-code">{session.courseCode}</p>
                  <div className="session-meta">
                    <div className="meta-item">
                      <span className="meta-label">Instructor:</span>
                      <span className="meta-value">{session.instructor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location:</span>
                      <span className="meta-value">{session.room}</span>
                    </div>
                  </div>
                  <div className="session-actions">
                    <button className="action-btn primary">Join Session</button>
                    <button className="action-btn secondary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-sessions-message">
            <div className="message-icon">📅</div>
            <h3>No sessions scheduled</h3>
            <p>There are no class sessions scheduled for this day.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sessions;
