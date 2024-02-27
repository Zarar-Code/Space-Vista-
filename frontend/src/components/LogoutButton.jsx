// LogoutButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../features/authSlice';
import axios from 'axios';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      axios.post('/api/v1/users/logout');
      dispatch(clearUser());
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
