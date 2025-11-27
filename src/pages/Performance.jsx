import React, { useState } from 'react';
import { BookOpen, Award, FileCheck, Trophy } from 'lucide-react';
import './Performance.css';

const Performance = () => {
  const [selectedSemester, setSelectedSemester] = useState('SEM07');
  const [selectedCourse, setSelectedCourse] = useState('Placement Question Bank');
  const [comparisonView, setComparisonView] = useState('self');

  const stats = [
    {
      icon: BookOpen,
      label: 'Total Courses',
      value: 8,
      color: '#3b82f6',
    },
    {
      icon: Award,
      label: 'Credits',
      value: 18,
      color: '#f59e0b',
    },
    {
      icon: FileCheck,
      label: 'Overall Completion',
      value: '7.33%',
      color: '#10b981',
    },
    {
      icon: Trophy,
      label: 'Badges',
      value: 0,
      color: '#ef4444',
    },
  ];

  const courses = [
    'Placement Question Bank',
    'Cyber Security and Privacy',
    'Social Network Analysis',
    'CIPE(Audit)',
  ];

  return (
    <div className="performance-page">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>My Performance</span>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                <Icon size={32} color="white" />
              </div>
              <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="performance-content">
        <div className="filters-section">
          <div className="filter-group">
            <label>Semester</label>
            <select 
              value={selectedSemester} 
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="SEM07">SEM07</option>
              <option value="SEM06">SEM06</option>
              <option value="SEM05">SEM05</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Course</label>
            <select 
              value={selectedCourse} 
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="score-board-section">
          <h2>Score Board</h2>
          <div className="no-record-message">
            <p>No record found.</p>
          </div>
        </div>

        <div className="comparison-section">
          <h3>My Performance when compare with</h3>
          <div className="comparison-buttons">
            <button 
              className={`comparison-btn peers ${comparisonView === 'peers' ? 'active' : ''}`}
              onClick={() => setComparisonView('peers')}
            >
              <span className="btn-icon">👥</span>
              <span>Peers</span>
            </button>
            <button 
              className={`comparison-btn self ${comparisonView === 'self' ? 'active' : ''}`}
              onClick={() => setComparisonView('self')}
            >
              <span className="btn-icon">👤</span>
              <span>Self</span>
            </button>
          </div>
          <div className="comparison-results">
            <div className="result-card">
              <h4>Performance Status</h4>
              <p className="no-record">No record found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
