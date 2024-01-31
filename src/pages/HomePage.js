import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Portfolio ni kent</h2>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default HomePage;