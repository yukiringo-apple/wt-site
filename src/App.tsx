import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Member from './pages/member/member';
import Home from './pages/home/home';
import History from './pages/history/history';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/member">Member</Link></li>
            <li><Link to="/history">History</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>)
}

export default App;
