import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiSolidDashboard } from "react-icons/bi";
import "./AllUsers.css"
import { NavLink } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import SideNavbar from '../../Admin/AdminPanel/Navside/SideNav';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/v1/admin/AdminUsers');
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // DELETE USERS
  const handleDeleteUser = async (userId) => {
    try {
      await axios.post(`/api/v1/admin/deleteUser/${userId}`);
      // After successful deletion, fetch updated user list
      setAllUsers(allUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SideNavbar />
      <div className='main-admin-container'>
        <div className='dashboard'><NavLink to='/AdminPanel'><BiSolidDashboard /></NavLink></div>
        <div className="container">
          <h1 className='user-admin-head'>ALL USERS DETAILS</h1>
          {
            loading ? (
              <div className="loader">
                <BounceLoader color="#725AC1" />
              </div>
            ) : (
              <>
                {allUsers.length > 0 ? (
                  <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                  <table className="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>FULL NAME</th>
                        <th>USERNAME</th>
                        <th colSpan="2">EMAIL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map((item, index) => (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.fullName}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td style={{ textAlign: "center" }}>
                            <button onClick={() => handleDeleteUser(item._id)} className='delete-user'>DELETE</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                ) : (
                  <div className='no-user'>
                    <img style={{ textAlign: "center" }} src="/images/no-user.png" alt="no-user" srcSet="" />
                    <h1>NO USER FOUND</h1>
                  </div>
                )}
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default AllUsers;
