import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/index.scss';
import Home from './pages/Home';
import Propos from './pages/A-Propos';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <div className="page-container">
      {' '}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
