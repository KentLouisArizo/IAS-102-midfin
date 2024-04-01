import React, { useState } from 'react';

const ChangeUserPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Logic for changing user's password
    console.log(`Changing password for user email: ${email} to ${newPassword}`);
    // Clear fields
    setEmail('');
    setNewPassword('');
  };

  return (
    <div>
      <h2>Change User Password</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangeUserPassword;