
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAdmin } from '../../features/adminAuthSlice';
import axios from 'axios';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      axios.post('/api/v1/admin/logout');
      dispatch(clearAdmin());
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return <button className="but" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
