import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Don App</h1>
      <p>
        This is Don Login System that uses react js and firebase.
      </p>
      <div className="button-group">
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
        <Link to="/signin" className="btn btn-secondary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;