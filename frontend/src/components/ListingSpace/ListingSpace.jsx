import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
// import Authenticaton from '../../features/authSlice'
import { useSelector } from 'react-redux';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./ListingSpace.css";


const ListingSpace = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    propertyType: '',
    city: '',


    selectedWorkspace: '',
    selectedCoworkingOption: '',
    selectedEventspaces:'',
    
    selectedPrivate:'',
    residentialArea:'',

    googleMapsLocation: '',
    useAbleArea: '',
    description:'',

    price:'',
    capacity:'',
    address:'',
    amenities:''
  });

  const navigate = useNavigate();

  const [interiorImages, setInteriorImages] = useState([]);
  const [exteriorImages, setExteriorImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInteriorImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setInteriorImages(files);
  };

  const handleExteriorImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setExteriorImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formDataToSend = new FormData();
  
    // Append form data
    for (const key in formData) {
      if (formData[key] !== '' && formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    // Append interior images
    for (let i = 0; i < interiorImages.length; i++) {
      formDataToSend.append('interiorImages', interiorImages[i]);
    }
  
    // Append exterior images
    for (let i = 0; i < exteriorImages.length; i++) {
      formDataToSend.append('exteriorImages', exteriorImages[i]);
    }
  
    try {
      // Send formDataToSend using axios
      await axios.post('/api/v1/landlord/listingSpace', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      setSuccessMessage('Space Listing Successfully');
  
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 1000);
    } catch (error) {
      if (error.response.status === 409) {
        setErrMessage('This email is already registered');
      } else {
        console.error('Registration Error:', error);
      } if (error.response && error.response.status === 401) {
        // Handle token expiration or invalid token error here
        // For example, trigger token refresh or redirect to login page
        console.error('Invalid Access Token. Please refresh token or reauthenticate.');
      } else {
        // Handle other types of errors
        console.error('API Request Error:', error);
      }
    }
  };
  

  return (
    <>
    
    <div className="listing_container">
      <div className="listing-section-bg">
        <div className="overlay"></div>
        <div className="listing-content-container">
          <div className="listing-heading">
              <AnchorLink href="#roll">
              <button  
              className='l-button'> PARTNER WITH US </button>
              </AnchorLink>
          </div>
        </div>
      </div>
      <div className="listing-content">
        <div className="listing-c-1"><span>Why partner with SPACE VISTA?</span><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, aperiam inventore! Ad culpa vitae laudantium rem inventore nulla nisi debitis rerum consequuntur laborum tenetur, amet magnam sed dolor vel? Sed.
        Aut perspiciatis reiciendis aliquam illo accusantium vel aperiam quaerat mollitia voluptatibus molestias numquam dignissimos asperiores consequuntur, exercitationem nulla perferendis unde eos nam. Excepturi eum reprehenderit libero consectetur eveniet sunt distinctio!</div>
        <div className="listing-c-2"><img src="./images/listing.jpg" alt="img" srcset="" /></div>
      </div>

      <div className="listing-bg-pic">   

    <div className="listing-container" id='roll'>

      <h1>LISTING YOUR SPACE</h1>
      {
        !isAuthenticated ?(
          <div className="alert alert-warning" role="alert">
            FIRST LOGIN TO BECOME A PARTNER
          </div>
        ):(
          <h3>READY TO BECOME A PARTNER</h3>
        )
      }
      <form className="row g-3 main-listing-form" onSubmit={handleSubmit}>
        <div className="yourself">
            <div className="yourself-heading">
              <h2>Tell us about yourself</h2>
            </div>
              <div className="yourself-content">
                <div className="same-c">
                  <input
                    type="text"
                    // className="form-control mt-2"
                    placeholder="FIRST NAME"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="same-c">
                  <input
                    type="text"
                    // className="form-control mt-2"
                    placeholder="LAST NAME"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="same-c">
                  <input
                    type="email"
                    // className="form-control mt-2"
                    placeholder="EMAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                {
                  errMessage && (
                    <span className="email-already">
                        {errMessage}
                      </span>
                        )}
                  </div>
                <div className="same-c">
                  <input
                    type="text"
                    // className="form-control mt-2"
                    placeholder="CONTACT NO."
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
        </div>
        <div className="property">
        <div className="yourself-heading">
              <h2>Tell us about your property</h2>
            </div>
            <div className="yourself-content">
              {/* Selected */}
                <div className="same-c">
                    <select
                      className="form-select mt-2"
                      name="selectedWorkspace"
                      value={formData.selectedWorkspace}
                      onChange={handleChange}
                      required
                    >
                      <option value="">WORKSPACES</option>
                          <option value="Coworking">Coworking</option>
                          <option value="Private Office">Private Offices</option>
                          <option value="Event Spaces">Events & Space</option>
                          <option value="Enterprise Office">Enterprise Office</option>
                          <option value="Residential Space">Residential Space</option>
                        
                    </select>
                  </div>
                  {formData.selectedWorkspace === 'Coworking' && (
                    <>
                      <div className=" same-c">
                        <select
                          className="form-select mt-2"
                          name="selectedCoworkingOption"
                          value={formData.selectedCoworkingOption}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose..</option>
                          <option value="Hot Desk">Hot Desk</option>
                          <option value="Dedicated Desk">Dedicated Desk</option>
                        </select>
                      </div>
                      <div className="same-c">
                        <input
                          type="text"
                          className="mt-2"
                          placeholder="CAPACITY OF PEOPLE"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="CURRENT RENTAL (PKR)"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                          />
                    </div>
                      <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="AMENITIES"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    </>
                  )}
                  {formData.selectedWorkspace === 'Private Office' && (
                    <>
                    <div className=" same-c">
                        <select
                          className="form-select mt-2"
                          name="selectedPrivate"
                          value={formData.selectedPrivate}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose..</option>
                          <option value="Small Office">Small Office</option>
                          <option value="Large Office">Large Office</option>
                        </select>
                      </div>
                      <div className="same-c">
                        <input
                          type="text"
                          className="mt-2"
                          placeholder="CAPACITY OF PEOPLE"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="CURRENT RENTAL (PKR)"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="AMENITIES"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    </>
                  )}
                  {formData.selectedWorkspace === 'Event Spaces' && (
                    <>
                      <div className=" same-c">
                        <select
                          className="form-select mt-2"
                          name="selectedEventspaces"
                          value={formData.selectedEventspaces}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose..</option>
                          <option value="Event Space">Event Space</option>
                          <option value="Training Room">Training Room</option>
                          <option value="Meeting Room">Meeting Room</option>
                        </select>
                      </div>
                      <div className="same-c">
                        <input
                          type="text"
                          className="mt-2"
                          placeholder="CAPACITY OF PEOPLE"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="CURRENT RENTAL (PKR)"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="AMENITIES"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    </>
                  )}
                  {formData.selectedWorkspace === 'Enterprise Office' && (
                    <>
                      <div className="same-c">
                        <input
                          type="text"
                          className="mt-2"
                          placeholder="CAPACITY OF PEOPLE"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="CURRENT RENTAL (PKR)"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    <div className="same-c">
                          <input
                            type="text"
                            className="mt-2"
                            placeholder="AMENITIES"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    </>
                  )}

                {formData.selectedWorkspace === 'Residential Space' && (
                  <>
                    <div className="same-c">
                      <input
                        type="text"
                        className="mt-2"
                        placeholder="Residential Area in Sq. ft"
                        name="residentialArea"
                        value={formData.residentialArea}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}
{/* Common */}
                <div className="same-c">
                  <select
                    className="form-select mt-2"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="Single Owner">Single Owner</option>
                    <option value="Multiple Owners">Multiple Owners</option>
                  </select>
                </div>
                <div className="same-c">
                  <input
                    type="text"
                    className=" mt-2"
                    placeholder="CITY OF PROPERTY"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="same-c">
                  <input
                    type="text"
                    className=" mt-2"
                    placeholder="PROPERTY ADDRESS"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="same-c">
                  <input
                    type="text"
                    className="mt-2"
                    placeholder="Google Maps Pin Location (OPTIONAL)"
                    name="googleMapsLocation"
                    value={formData.googleMapsLocation}
                    onChange={handleChange}
                  />
                </div>
          
                <div className="same-c">
                        <div className="mb-3">
                        <label for="exampleFormControlInput2" class="form-label" >EXTERIOR  IMAGES</label>
                          <input
                          id='exampleFormControlInput2'
                            type="file"
                            className="form-control"
                            multiple
                            onChange={handleExteriorImagesChange}
                            required
                          />
                        </div>
                  </div>

                <div className="same-c">
                  <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">INTERIOR IMAGES</label>
                    <input
                    id='exampleFormControlInput1'
                      type="file"
                      className="form-control"
                      multiple
                      onChange={handleInteriorImagesChange}
                      required
                    />
                  </div>
                </div>
                

                <div className="same-t">
                  <div className="mb-3 mt-2">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Description About Your Place"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                
            </div>
        </div>
        {
          isAuthenticated ?(
            <>
            <div className="col-6">
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </div>
            {
              successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                </>
          ):(
            <div className="col-6">
              <button disabled type="submit" className="btn btn-primary mt-2">Submit</button>
            </div>
          )
        }
        
      </form>
      {
        isAuthenticated ?(
        <>
        <div className="col-6">
          <NavLink to='/mySpace'><button type="submit" class="btn btn-outline-success mt-2">My Spaces</button></NavLink>
        </div>
        </>
        ):(
          null
        )
      }
    </div>
    </div>
    </div>
    </>
  );
};

export default ListingSpace;
