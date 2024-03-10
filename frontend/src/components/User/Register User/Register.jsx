import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , NavLink} from 'react-router-dom';
import './Register.css'
import { AiFillHome } from "react-icons/ai";

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
    <>
    <div class="Register-container">
    <div className='home-logo'> <NavLink to="/">< AiFillHome /></NavLink></div>
    <div className="register-inner-container">
    <form class="register-form" onSubmit={handleSubmit}>

        <div className="register_name">
            <h1>REGISTRATION</h1>
        </div>
        <div className='register-content'>
          <input type="text" 
          className='register-input'
          placeholder='USERNAME'
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          required />

          <input type="text"
          className='register-input'
          placeholder='FULL NAME'
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required />
      
          <input type="email"
          className='register-input'
          placeholder='EMAIL'
          name="email"
          value={formData.email}
          onChange={handleChange} required />
    
          <input type="password"
          className='register-input'
          placeholder='PASSWORD'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required />
        </div>
        <div className='register-btn-detail'>
        <button className='register-btn' type="submit">Register</button>
        <span class="switch">Already have an account? &nbsp;
                <label for="signup_toggle" class="register_tog">
                <NavLink to="/login">Sign In</NavLink>
                </label>
            </span>
            </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default Register;
