import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Clock, BarChart3, LifeBuoy, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/timeline', label: 'Timeline', icon: Clock },
    { path: '/sessions', label: 'Sessions', icon: Calendar },
    { path: '/performance', label: 'My Performance', icon: BarChart3 },
    { path: '/help-desk', label: 'Help Desk', icon: LifeBuoy },
  ];

  return (
    <nav className="navbar gradient-bg">
      <div className="nav-items">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={24} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
