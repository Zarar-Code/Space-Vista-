import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import './Register.css';
import { AiFillHome } from 'react-icons/ai';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    avatar: null, // Add a new property for the avatar file
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Only update the avatar if a file is selected
    setFormData({ ...formData, avatar: file ? file : null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      if (formData.avatar) {
        formDataToSend.append('avatar', formData.avatar);
      }

      const response = await axios.post('/api/v1/users/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration Error:', error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <>
      <div className="Register-container">
        <div className='home-logo'> <NavLink to="/"><AiFillHome /></NavLink></div>
        <div className="register-inner-container">
          <form className="register-form" onSubmit={handleSubmit}>

            <div className="register_name">
              <h1>REGISTRATION</h1>
            </div>
            <div className='register-content'>
              <input
                type="text"
                className='register-input'
                placeholder='USERNAME'
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className='register-input'
                placeholder='FULL NAME'
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                className='register-input'
                placeholder='EMAIL'
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                className='register-input'
                placeholder='PASSWORD'
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <input
                type="file"
                className='register-input'
                name="avatar"
                onChange={handleFileChange}
                accept="image/*" 
                title="Upload Profile Picture"
              />
            </div>
            <div className='register-btn-detail'>
              <button className='register-btn' type="submit">Register</button>
              <span className="switch">Already have an account? &nbsp;
                <label htmlFor="signup_toggle" className="register_tog">
                  <NavLink to="/login">Sign In</NavLink>
                </label>
              </span>
            </div>
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
