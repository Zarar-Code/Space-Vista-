import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import "./MySpace.css";

const MySpace = () => {
  const [mySpaces, setMySpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchSpace = async () => {
    try {
      const response = await axios.get('/api/v1/mySpace');
      setMySpaces(response.data.data);
      // No need to set loading here
      // console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSpace();
  }, []);

  useEffect(() => {
    // Check mySpaces length after data is fetched
    if (mySpaces.length === 0) {
      setLoading(false);
    }
  }, [mySpaces]); // Only run when mySpaces changes

  const redirectToEdit = (spaceId) => {
    navigate(`/mySpace/${spaceId}`);
  };

  const deleteSpace= async(spacId)=>{
    try {
      await axios.delete(`/api/v1/mySpace/${spacId}`)

      setErrorMessage('Space deleted successfully');
      
      setTimeout(() => {
        setErrorMessage('');
        setMySpaces(mySpaces.filter(space => space._id !== spacId));
      }, 2000);

    } catch (error) {
      console.error('Error while delete data:', error);
    }
  }

  return (
    <>
      <div className="mySpace-container-bg">
        <div className="overlay"></div>
        <div className="mySpace-content">
          <div className="mySpace-heading">
            <h1>MY SPACES</h1>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-mySpace">
          <BounceLoader color="#725AC1" />
        </div>
      ) : mySpaces.length === 0 ? (
        <div className="message-container">
          <p>Without your spaces, the SPACE VISTA sighs.</p>
          <h1>Register your space and join us as partners.</h1>
          <NavLink to="/listingSpace"><button style={{fontFamily:"Axiforma", padding:"10px"}}  className='btn-sm btn btn-outline-primary mt-4'>BECOME A PARTNER
          </button></NavLink>
        </div>
      ) : (
        <div className="spaces-container-main">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="heading-myspace">
            <h1>"Explore and Edit Your Space Here for Personal Touches."</h1>
          </div>
          <div className="spaces-container">
            {mySpaces.map((space) => (
                <div key={space._id} className="card">
                  <img src={space.exteriorImages[0]} className="card-img-top" alt="img" />
                  <div className="card-body">
      
                      <div className="card-myheading">
                  <h5 className="city">{space.city.toUpperCase()}</h5> |
                  <h6  className="workSpace">{space.selectedWorkspace.toUpperCase()}</h6>
                      </div>
                      <p>{space.address}</p>
      
                      <h4>PKR {space.price}</h4>
      
                  <div className="edit" onClick={() => redirectToEdit(space._id)}>
                      <span>EDIT</span>
                  </div>
                  <button type="submit" onClick={()=>deleteSpace(space._id)} class="space-d">DELETE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MySpace;
