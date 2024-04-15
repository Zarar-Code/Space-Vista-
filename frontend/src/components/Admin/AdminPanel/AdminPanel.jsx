import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../../adminLogout/adminLogout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./AdminPanel.css"
import SiderNavbar from './Navside/SideNav'
import ClipLoader from "react-spinners/ClipLoader";

const AdminPanel = () => {
  const isAuthenticated = useSelector((state) => state.adminAuth.isAuthenticated);
  const admin = useSelector((state) => state.adminAuth.admin);
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [spaces, setSpaces] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/v1/admin/AdminUsers');
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSpaces = async () => {
    try {
      const response = await axios.get('/api/v1/admin/adminSpaces');
      setSpaces(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getAllSpaces();
  }, []);

  const handleLogoutRedirect = () => {
    navigate('/admin/login');
  };

  if (admin === undefined) {
    return <div style={{ marginTop: "250px" }} className='loader'><ClipLoader color="#36d7b7" /></div>;
  }

  return (
    <div>
      {
        !isAuthenticated ? (
          <>
            {navigate('/admin/login')}
          </>
        ) : (
          <>
            {allUsers && spaces && (
              <div className="admin-container">
                <SiderNavbar />
                <div id="main">
                  <div className="head">
                    <div className="head-1">
                      <h1>OVERVIEW</h1>
                    </div>
                    <div className="head-2">
                      <p>{admin.username}</p>
                      <div className="profile">
                        <img src={admin.avatar} className="pro-img" alt="Profile" />
                      </div>
                      <div className="head-2-iner">
                        <div className="bt">
                          <LogoutButton onClick={handleLogoutRedirect}>Logout</LogoutButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='whole'>
                    <div className="my-col">
                      <div className="col-div-3">
                        <div className="box">
                          <div className='span-1'>TOTAL USERS</div>
                          <div className='span-2'>{allUsers.length}</div>
                        </div>
                      </div>
                      <div className="col-div-3">
                        <div className="box">
                          <div className='span-1'>TOTAL SPACES</div>
                          <div className='span-2'>{spaces.length}</div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-div-8">
                      <div className="box-8">
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </>
        )
      }
    </div>
  );
};

export default AdminPanel;
