import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./MySpaceEdit.css";
import ClipLoader from "react-spinners/ClipLoader";

const MySpaceEdit = () => {

  const [interiorImages, setInteriorImages] = useState([]);
  const [exteriorImages, setExteriorImages] = useState([]);

  const navigate = useNavigate();

  const { spaceId } = useParams();
  const [space, setSpace] = useState(null);
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
    amenities:'',

    interiorImages: [],
    exteriorImages: []
  });

  // Function to fetch the space data for editing
  const fetchEditSpace = async () => {
    try {
      const response = await axios.get(`/api/v1/mySpace/${spaceId}`);
      setSpace(response.data.space); // Assuming the response has a 'space' property
      // console.log(response.data.space)
      const spaceData = response.data.space; // Assuming the response has 'space' object

      setFormData({
        firstName: spaceData.firstName || '',
        lastName: spaceData.lastName || '',
        email: spaceData.email || '',
        contactNo: spaceData.contactNo || '',

        propertyType: spaceData.propertyType || '',
        city: spaceData.city || '',
        selectedWorkspace: spaceData.selectedWorkspace || '',
        selectedCoworkingOption: spaceData.selectedCoworkingOption || '',
        selectedEventspaces: spaceData.selectedEventspaces || '',
        selectedPrivate: spaceData.selectedPrivate || '',
        residentialArea: spaceData.residentialArea || '',

        useAbleArea: spaceData.useAbleArea || '',
        description: spaceData.description || '',
        googleMapsLocation: spaceData.googleMapsLocation || '',

        price: spaceData.price || '',
        capacity: spaceData.capacity || '',
        address: spaceData.address || '',
        amenities: spaceData.amenities || '',

        interiorImages: spaceData.interiorImages || [],
        exteriorImages: spaceData.exteriorImages || []
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchEditSpace();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (space === null) {
    return <div style={{marginTop:"250px"}} className='loader'><ClipLoader color="#725AC1" /></div>;
  }

  const handleInteriorImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setInteriorImages(files);
    // console.log(files)
  };

  const handleExteriorImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setExteriorImages(files);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

  for (const key in formData) {
    formDataToSend.append(key, formData[key]);
  }

  for (let i = 0; i < interiorImages.length; i++) {
    formDataToSend.append('interiorImages', interiorImages[i]);
  }

  for (let i = 0; i < exteriorImages.length; i++) {
    formDataToSend.append('exteriorImages', exteriorImages[i]);
  }

  try {
    const response = await axios.put(`/api/v1/mySpace/${spaceId}`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Update successful:', response.data);
    navigate('/');
  } catch (error) {
    console.error('Update Error:', error);
  }
};

  // --------------------------------------------------------------------------
  const renderInteriorImages = () => {
    return space.interiorImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Interior ${index + 1}`}
        className="img-preview"
      />
    ));
  };

  const renderExteriorImages = () => {
    return space.exteriorImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Exterior ${index + 1}`}
        className="img-preview"
      />
    ));
  };
  // -----------------------------------------------------------------------------------
  

  return (
    <>
      <div className="mySpace-container-bg">
        <div className="overlay"></div>
        <div className="mySpace-content">
          <div className="mySpace-heading">
            <h1>EDIT SPACES</h1>
          </div>
        </div>
      </div>
      <div className="edit-myspace-container">
      {space ? (
        <form className="row g-3" onSubmit={handleSubmit}>
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
                        <div className="image-preview">
                            {renderExteriorImages()}
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
                  <div className="image-preview">
                    {renderInteriorImages()}
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
          <div className="col-6">
            <button type="submit" class="btn btn-outline-secondary mt-2">UPDATE</button>
          </div>
        </form>
      ) : (
        <>
          <h1>Error:No Space Found</h1>
        </>
      )
      }
      </div>
    </>
  );
};

export default MySpaceEdit;
