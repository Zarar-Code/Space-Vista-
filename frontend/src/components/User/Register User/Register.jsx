import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , NavLink} from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/users/register', formData);
      console.log(response.data);
      
      // Redirect to the login page after successful registration
      navigate('/login');

    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div class="Register-container">
    <form class="form" onSubmit={handleSubmit}>
        <div class="form_front">
        <div class="form_details">Registration</div>
          <input type="text" 
          className='input'
          placeholder='USERNAME'
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          required />

          <input type="text"
          className='input'
          placeholder='FULL NAME'
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required />
      
          <input type="email"
          className='input'
          placeholder='EMAIL'
          name="email"
          value={formData.email}
          onChange={handleChange} required />
    
          <input type="password"
          className='input'
          placeholder='PASSWORD'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required />
        
        <button className='btn' type="submit">Register</button>
        <span class="switch">Already have an account? &nbsp;
                <label for="signup_toggle" class="signup_tog">
                <NavLink to="/login">Sign In</NavLink>
                </label>
            </span>
      </div>
      </form>
    </div>
  );
};

export default Register;
