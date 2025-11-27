import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';
import Performance from './pages/Performance';
import HelpDesk from './pages/HelpDesk';
import Sessions from './pages/Sessions';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/help-desk" element={<HelpDesk />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-links">
            <a href="#">Legal Disclaimer</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy & Cookies</a>
          </div>
          <p className="copyright">
            Copyright © 2024 Learning platform. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
