import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

      localStorage.setItem('token', response.data.data.accessToken);

      dispatch(setUser(response.data.user));
      navigate('/'); // Navigate to home page after successful login
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input className="border-2 border-rose-600" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input className="border-2 border-rose-600" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button className='border-solid border-2 border-color:rgb(0 0 0)' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
