import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePagePanel from './HomePagePanel'; // Import HomePagePanel component
import AdminPanel from './AdminPanel'; // Import AdminPanel component
import SignUp from './SignUp'; // Import SignUp component
import AdminSignIn from './AdminSignIn'; // Import AdminSignIn component
import UserSignIn from './UserSignIn'; // Import UserSignIn component
import ResetPassword from './ResetPassword';
import TestPage from './TestPage';
import AuthProvider from './AuthProvider'; // Import AuthProvider for authentication

const App = () => {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePagePanel />} /> {/* Render HomePagePanel on root */}
          <Route path="/admin" element={<AdminSignIn />} /> {/* Admin signin route */}
          <Route path="/user" element={<UserSignIn />} /> {/* User signin route */}
          <Route path="/signup" element={<SignUp />} /> {/* Signup route */}
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} /> {/* Admin panel route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;