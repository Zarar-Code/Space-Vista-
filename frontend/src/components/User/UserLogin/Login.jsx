import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/authSlice';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { AiFillHome } from "react-icons/ai";
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
        <div className='home-logo'> <NavLink to="/">< AiFillHome /></NavLink></div>
        <div className="login-inner-container">
    <form class="form" onSubmit={handleSubmit}>
      <div className="login_name">
            <h1>LOGIN HERE</h1>
        </div>
        <div className='login-content'>
            <input 
            className="login-email" 
            type="email" 
            name="email" 
            placeholder='EMAIL'
            value={formData.email} 
            onChange={handleChange} 
            required />

            <input 
            className="login-password"
            type="password" 
            name="password"
            placeholder='PASSWORD'
            value={formData.password} 
            onChange={handleChange} 
            required />
        </div>
        <div className='login-btn-detail'>
            <button class="login-btn">Login</button>
            <span class="switch">Don't have an account? &nbsp;
                <label for="signup_toggle" class="login_tog">
                <NavLink to="/register">Sign Up</NavLink>
                </label>
            </span>
        </div>
        </form>
        </div>
    </div>

  );
};

export default Login;
