import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedSemester, setSelectedSemester] = useState('SEM07');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)); // November 2025

  const courses = [
    {
      title: 'Cyber Security and Privacy',
      subtitle: '(NPTEL- Swayam)',
      grades: 0,
      badges: 0,
      credits: 3,
      status: 'Incomplete',
      code: '23ECSE454',
      semester: 'SEM07'
    },
    {
      title: 'Social Network Analysis',
      subtitle: '(NPTEL- Swayam)',
      grades: 0,
      badges: 0,
      credits: 3,
      status: 'Incomplete',
      code: '23ECSE452',
      semester: 'SEM07'
    },
    {
      title: 'CIPE(Audit)',
      subtitle: '',
      grades: 0,
      badges: 0,
      credits: 3,
      status: 'Incomplete',
      code: '15EHSA401',
      semester: 'SEM07'
    },
  ];

  const onlineUsers = [
    { name: 'Arati Joshi', status: 'online' },
    { name: 'SANJANA ASHOK GULEDAGUDDA', status: 'online' },
    { name: 'Mrs. Pooja V Chandaragi', status: 'online' },
    { name: 'Abhinay Gupta', status: 'online' },
    { name: 'SAANJALI BELGAVI', status: 'viewing' },
    { name: 'ANURAG MULLUR', status: 'online' },
    { name: 'Hemalatha J P', status: 'online' },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="calendar-day">
          {day}
        </div>
      );
    }
    
    return days;
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="dashboard-content">
        <div className="main-section">
          <div className="semester-selector">
            <label>Semesters</label>
            <select 
              value={selectedSemester} 
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="SEM07">SEM07</option>
              <option value="SEM06">SEM06</option>
              <option value="SEM05">SEM05</option>
            </select>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-placeholder">
                  <div className="placeholder-icon">📚</div>
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  {course.subtitle && <p className="course-subtitle">{course.subtitle}</p>}
                  <div className="course-stats">
                    <span>🎓 Grades: {course.grades}</span>
                    <span>🏆 Badges: {course.badges}</span>
                    <span>📊 Credits: {course.credits}</span>
                  </div>
                  <div className="course-status">
                    <span className={`status-badge ${course.status.toLowerCase()}`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="course-meta">
                    <span>Course Code: {course.code}</span>
                    <span>Semester: {course.semester}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <div className="calendar-widget">
            <div className="calendar-header">
              <h3>📅 Calendar</h3>
              <div className="month-navigation">
                <button onClick={() => changeMonth(-1)}>
                  <ChevronLeft size={20} />
                </button>
                <span>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                <button onClick={() => changeMonth(1)}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="calendar-grid">
              <div className="calendar-day-label">Mon</div>
              <div className="calendar-day-label">Tue</div>
              <div className="calendar-day-label">Wed</div>
              <div className="calendar-day-label">Thu</div>
              <div className="calendar-day-label">Fri</div>
              <div className="calendar-day-label">Sat</div>
              <div className="calendar-day-label">Sun</div>
              {renderCalendar()}
            </div>
          </div>

          <div className="online-users-widget">
            <h3><Users size={20} /> Online users</h3>
            <p className="online-count">7 online users (last 1 minutes)</p>
            <div className="users-list">
              {onlineUsers.map((user, index) => (
                <div key={index} className="user-item">
                  <span className={`status-dot ${user.status}`}></span>
                  <span className="user-name">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
