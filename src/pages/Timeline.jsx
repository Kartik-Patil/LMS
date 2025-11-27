import React, { useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [selectedTime, setSelectedTime] = useState('Today');

  const timeOptions = [
    'Today',
    'Yesterday',
    'Last 7 days',
    'Last 30 days',
    'This month',
    'Last month',
  ];

  return (
    <div className="timeline-page">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>Timeline</span>
      </div>

      <div className="timeline-content">
        <div className="time-selector-section">
          <label>Select Time</label>
          <select 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="activity-section">
          <div className="no-activity-message">
            <div className="message-icon">📊</div>
            <p>There is no activity in your timeline.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
