import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/authSlice';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Login.css"

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
      const response = await axios.post('/api/v1/users/login', formData);

        dispatch(setUser(response.data.user));
        dispatch(setUser(response.data.accessToken));
        navigate('/'); // Redirect to home page for regular users
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (

      <div class="Login-container">
    <form class="form" onSubmit={handleSubmit}>
        <div class="form_front">
            <div class="form_details">Login</div>
            <input 
            className="input" 
            type="email" 
            name="email" 
            placeholder='EMAIL'
            value={formData.email} 
            onChange={handleChange} 
            required />

            <input 
            className="input"
            type="password" 
            name="password"
            placeholder='PASSWORD'
            value={formData.password} 
            onChange={handleChange} 
            required />

            <button class="btn">Login</button>
            <span class="switch">Don't have an account? &nbsp;
                <label for="signup_toggle" class="signup_tog">
                <NavLink to="/register">Sign Up</NavLink>
                </label>
            </span>
        </div>
        </form>
    </div>

  );
};

export default Login;
