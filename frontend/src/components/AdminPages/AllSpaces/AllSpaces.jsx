import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { BiSolidDashboard } from "react-icons/bi";
import {  useNavigate } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import SideNavbar from '../../Admin/AdminPanel/Navside/SideNav'
import "./AllSpaces.css"

const AllSpaces = () => {

    const [allSpaces, setAllSpaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    // const [isChecked, setIsChecked] = useState(true);

        const getAllSpaces = async () => {
            setLoading(true);
        try {
            const response = await axios.get('/api/v1/admin/adminSpaces');
            setAllSpaces(response.data);
            // console.log(response.data)

            } catch (error) {
            console.log(error);
            } finally {
            setLoading(false);
            }
        };
        
        useEffect(() => {
            getAllSpaces();
        }, []);



        const handleCheckboxChange = async (spaceId, currentStatus) => {
            const updatedSpaces = allSpaces.map((space) => {
                if (space._id === spaceId) {
                    return { ...space, isActive: !currentStatus };
                }
                return space;
            });
    
            setAllSpaces(updatedSpaces);
    
            try {
                await axios.put(`/api/v1/admin/updateSpace/${spaceId}`, { isActive: !currentStatus });
            } catch (error) {
                console.log('Error updating space:', error);
                setAllSpaces(allSpaces);
            }
        };

    const redirectToDetails = (spaceId)=>{
        navigate(`/admin/allSpaces/${spaceId}`)
        }
        
  return (
    <>
    <SideNavbar />
    <div className='main-admin-container'>
        <div className="container">
        <h1 className='user-admin-head'>ALL SPACES DETAILS</h1>
    {
            loading ? (
            <div className="loader">
                <BounceLoader color="#725AC1" />
            </div>
            ) : (
            <>
                {allSpaces.length > 0 ? (
                <>
                <div className="space-admin-cont">
        {
        allSpaces.map((item)=>(
            <div key={item._id}>
                <div class="card" style={{width: "12rem"}}>
                    <img src={item.exteriorImages[0]} class="card-img-top" alt="i"/>
                    <div class="card-body">
                    <h5 class="card-title">{item.firstName}</h5>
                    <p class="card-text">{item.selectedWorkspace}</p>
                    {/* <p class="card-text">{item.description}</p> */}

                    <div class="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`flexSwitchCheckDefault-${item._id}`}
                        checked={item.isActive}
                        onChange={() => handleCheckboxChange(item._id, item.isActive)}
                        />
                        <label className="form-check-label" htmlFor={`flexSwitchCheckDefault-${item._id}`}>
                            {item.isActive ? 'ACTIVE' : 'IN-ACTIVE'}
                        </label>

                        </div>
                            <button className='view-b' onClick={() => redirectToDetails(item._id)}>View</button>
                        </div>
                        </div>
                    </div>
                    ))
                }
                </div>
                
                </>
                ) : (
                <div className='no-user'>
                    <img style={{ textAlign: "center" }} src="/images/no-user.png" alt="no-user" srcSet="" />
                    <h1>NO SPACES FOUND</h1>
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

export default AllSpaces