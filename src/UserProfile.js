import React from 'react';
import { auth } from './firebase'; // Import auth from the firebase.js file
import './all.css';

const UserProfile = ({ user }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Use the imported auth object
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more user profile details as needed */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;