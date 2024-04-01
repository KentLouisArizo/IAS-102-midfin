import React from 'react';
import { Link } from 'react-router-dom';
import './HomePagePanel.css';

const HomePagePanel = () => {
  return (
    <div className="container">
      <h1>Welcome to Our App</h1>
      <p>
        This is a sample homepage for our user login system built with React and Firebase.
      </p>
      <div className="button-group">
        <Link to="/user" className="btn btn-primary">
          User Sign In
        </Link>
        <Link to="/admin" className="btn btn-secondary">
          Admin Sign In
        </Link>
      </div>
    </div>
  );
};

export default HomePagePanel;