// Home.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton'; // Import the LogoutButton component

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>Home</h2>
      {isAuthenticated ? (
        <div>
          <p>Welcome to the home page!</p>
          <LogoutButton /> {/* Render LogoutButton if user is authenticated */}
        </div>
      ) : (
        <div>
          <p>Please log in to access the home page.</p>
          <button onClick={handleLoginRedirect}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;
