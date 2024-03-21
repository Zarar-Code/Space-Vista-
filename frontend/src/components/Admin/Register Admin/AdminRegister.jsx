import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    avatar: null, // State for storing the selected avatar image
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle file input change for avatar image
  const handleAvatarChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] }); // Get the first selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('avatar', formData.avatar); // Append the avatar image

    try {
      const response = await axios.post('/api/v1/admin/register', formDataToSend);
      console.log(response.data);
      
      // Redirect to the login page after successful registration
      navigate('/login');

    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Avatar Image:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleAvatarChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
