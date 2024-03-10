import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdmin } from '../../../features/adminAuthSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./AdminLogin.css"

import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/admin/login', formData);
        dispatch(setAdmin(response.data.admin));
        navigate('/AdminPanel'); // Redirect to home page for regular users
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className='admin-login-container'>
      <form className='admin-login-form' onSubmit={handleSubmit}>
      <div className="admin-login-name">
            <h1>ADMIN LOGIN</h1>
        </div>
        <div className='admin-login-content'>
          <input 
          className="admin-login-input" 
          placeholder='EMAIL'
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required />

          <input 
          className="admin-login-input" 
          placeholder='PASSWORD'
          type="password" name="password"
          value={formData.password} 
          onChange={handleChange} 
          required />
        </div>
      
        <button 
        className='admin-login-btn' 
        type="submit">Login</button>
        
      </form>
    </div>
  );
};

export default Login;
