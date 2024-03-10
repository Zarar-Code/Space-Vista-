import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../../adminLogout/adminLogout';
import {  useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import "./AdminPanel.css"
import SiderNavbar from './Navside/SideNav'
import ClipLoader from "react-spinners/ClipLoader";


const AdminPanel = () => {
  const isAuthenticated = useSelector((state) => state.adminAuth.isAuthenticated);
  const navigate = useNavigate();

  const [allUsers , setAllUsers]= useState([]);
  const [admin , setAdmin]= useState(undefined);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/v1/admin/AdminUsers');
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAdmin = async () => {
    try {
      const response = await axios.get('/api/v1/admin/getadmin');
      setAdmin(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(admin.data)

  useEffect(() => {
    getUsers();
    getAdmin();
  }, []);

  const handleLogoutRedirect = () => {
    navigate('/admin/login');
  };
  
  if (admin === undefined) {
    return <div style={{marginTop:"250px"}} className='loader'><ClipLoader color="#36d7b7" /></div>;
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
            {allUsers.length >= 0 && (
              <div className="admin-container">
                <SiderNavbar/>
                <div id="main">
                  <div className="head">
                    <div className="head-1">
                      <h1>OVERVIEW</h1>
                    </div>
                    <div className="head-2">
                      <p>{admin.data.username}</p>
                      <div className="profile">
                        <img src="images/17.jpg" className="pro-img" alt="Profile" />
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
                          <div className='span-2'>{allUsers.length}</div>
                        </div>
                      </div>
                      <div className="col-div-3">
                        <div className="box">
                          <div className='span-1'>TOTAL SPACES</div>
                          <div className='span-2'>{allUsers.length}</div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <br /><br />
                    <div className="col-div-8">
                      <div className="box-8">
                        <div className="content-box">
                          <p>Top Selling Projects <span>Sell All</span></p>
                          <br />
                          <table>
                            <tbody>
                              <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                              </tr>
                              <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                              </tr>
                              <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                              </tr>
                              <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                                <td>Austria</td>
                              </tr>
                              <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                                <td>UK</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-div-4">
                      <div className="box-4">
                        <div className="content-box">
                          <p>Total Sale <span>Sell All</span></p>
                          <div className="circle-wrap">
                            <div className="circle">
                              <div className="mask full">
                                <div className="fill"></div>
                              </div>
                              <div className="mask half">
                                <div className="fill"></div>
                              </div>
                              <div className="inside-circle">70%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
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
