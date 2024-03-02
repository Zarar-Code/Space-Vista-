import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./ListingSpace.css";

const ListingSpace = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    propertyType: '',
    city: '',
    selectedWorkspace: '',
    selectedCoworkingOption: '',
    customizedPlace:'',
    googleMapsLocation: '',
    useAbleArea: '',
    description:'',
    residentialArea:'',
  });

  const navigate = useNavigate();

  const [interiorImages, setInteriorImages] = useState([]);
  const [exteriorImages, setExteriorImages] = useState([]);

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
      formDataToSend.append(key, formData[key]);
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
      navigate('/');
    } 
    catch (error) {
      console.error('Registration Error:', error);
    }
  };
  

  return (
    <>
    <div className="listing_container">
    <div className="listing_content">
    <AnchorLink href="#roll">
      <button  
      className='btn'> PARTNER WITH US </button>
      </AnchorLink>
      </div>
    <div className="container" id='roll'>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="FIRST NAME"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="LAST NAME"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-7">
          <input
            type="email"
            className="form-control mt-4"
            placeholder="EMAIL"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="CONTACT NO."
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-auto">
          <select
            className="form-select mt-4"
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
        <div className="col-5">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="CITY OF PROPERTY"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control mt-4"
            placeholder="Google Maps Pin Location"
            name="googleMapsLocation"
            value={formData.googleMapsLocation}
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <select
            className="form-select mt-4"
            name="selectedWorkspace"
            value={formData.selectedWorkspace}
            onChange={handleChange}
            required
          >
            <option value="">WORKSPACES</option>
            <option value="Coworking Space">Coworking Space</option>
            <option value="Residential Space">Residential Space</option>
          </select>
        </div>
        {formData.selectedWorkspace === 'Coworking Space' && (
          <>
            <div className="col-3">
              <select
                className="form-select mt-4"
                name="selectedCoworkingOption"
                value={formData.selectedCoworkingOption}
                onChange={handleChange}
                required
              >
                <option value="Coworking Space">Coworking Area</option>
                <option value="Private Office">Private Office</option>
                <option value="Event Space">Event Space</option>
                <option value="Customized Office">Customized Office</option>
              </select>
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control mt-4"
                placeholder="Usable Area in Sq. ft"
                name="useAbleArea"
                value={formData.useAbleArea}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {formData.selectedWorkspace === 'Residential Space' && (
          <>
            <div className="col-5">
              <input
                type="text"
                className="form-control mt-4"
                placeholder="Residential Area in Sq. ft"
                name="residentialArea"
                value={formData.residentialArea}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <div className="col-12">
          <div className="mb-3 mt-4">
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
        <div className="col-6">
          <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label" style={{color:"white"}}>INTERIOR IMAGES</label>
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
        <div className="col-6">
          <div className="mb-3">
          <label for="exampleFormControlInput2" class="form-label" style={{color:"white"}}>EXTERIOR  IMAGES</label>
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default ListingSpace;
