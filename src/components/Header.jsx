import React from 'react';
import { User, Bell, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="logo-container">
          <div className="logo-icon">LP</div>
          <div className="logo-text">
            <h2>Learning platform</h2>
            <p>Creating Value - Leveraging Knowledge</p>
          </div>
        </div>
      </div>
      <div className="header-right">
        <select className="language-select">
          <option>English (en)</option>
        </select>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <User size={20} />
        </button>
        <div className="user-info">
          <span className="user-name">{/* Student name will appear here after login */}</span>
          <span className="user-role">Student</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
