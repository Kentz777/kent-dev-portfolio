import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Remove logo import if you don't use it
// import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;