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

  const redirectToDetail = (spaceId) => {
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
          <NavLink to="/listingSpace"><button  className='btn-sm btn btn-outline-primary mt-3'>BECOME A PARTNER
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
            {mySpaces.map((item) => (
              <div key={item._id} className="card" style={{ width: "18rem" }}>
                <img src={item.exteriorImages[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.selectedWorkspace}</h5>
                  <p className="card-text">Some quick example text to build on the .</p>
                  <div style={{color:"white", padding:"6px 22px"}} onClick={() => redirectToDetail(item._id)} className="btn btn-primary mt-2">
                    EDIT
                  </div>
                  <button type="submit" onClick={()=>deleteSpace(item._id)} class="btn btn-outline-danger ml-3 mt-2">DELETE</button>
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
