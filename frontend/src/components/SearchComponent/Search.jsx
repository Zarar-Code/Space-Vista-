import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, filteredData } from "../../features/searchSlice";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import "./Search.css";
import {motion} from 'framer-motion'

const Search = () => {
const dispatch = useDispatch();
const [cityTerm, setCityTerm] = useState('');
const [selectedWorkspace, setSelectedWorkspace] = useState('');
const filterData = useSelector((state) => state.search.filteredData);
const navigate = useNavigate();

useEffect(() => {
const fetchDataFromDatabase = async () => {
    try {
    const response = await axios.get('/api/v1/allSpaces');
    console.log(response.data)
    dispatch(setData(response.data));
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};

fetchDataFromDatabase();
}, [dispatch]);

const handleSearch = (e) => {
    e.preventDefault();
dispatch(filteredData({ city: cityTerm, selectedWorkspace: selectedWorkspace }));
};

const handleCityChange = (e) => {
setCityTerm(e.target.value);
};

const handleNameChange = (e) => {
setSelectedWorkspace(e.target.value);
};

const redirectToDetail = (spaceId)=>{
    navigate(`/seeSpace/${spaceId}`)
  }

return (
<div>
    <div className="all-space-section-bg">
    <div className="overlay"></div>
    <div className="all-space-content-container">
        <div className='space-heading'>ALL SPACES</div>
        <div className="breadcrumb-position d-inline-block">
                <ul className='nav-space'>
                <li>All Spaces</li>
                </ul>
            </div>
    </div>
    </div>

        <form className="search-container">
            <input class="search-int search-input" 
            value={cityTerm}
            onChange={handleCityChange}
            name="text" 
            placeholder="ENTER CITY" 
            type="search"
            required
            />

        <select
            className='search-option search-input'
            name="selectedWorkspace"
            value={selectedWorkspace}
            onChange={handleNameChange}
            required
        >
                <option value="Coworking">Coworking</option>
                <option value="Private Office">Private Offices</option>
                <option value="Event Spaces">Events & Space</option>
                <option value="Enterprise Office">Enterprise Office</option>
            </select>
    <button className='searchbtn search-input' onClick={handleSearch}>Search</button>
    </form>
    
    <motion.div 
    initial={{x:-100}}
    animate={{ x: 100 }}
    transition={{ type: "spring", stiffness: 100 }}
    className='discover'>"Discover an array of dynamic spaces waiting to elevate your work experience"</motion.div>

    <div className="spaces-sections">
    {
    filterData.map((space) => (
        space.isActive ? (
        <div key={space._id} className="card">
            <img src={space.exteriorImages[0]} className="card-img-top" alt="img" />
            <div className="card-body">

                <div className="card-myheading">
            <h5 className="city">{space.city.toUpperCase()}</h5> |
            <h6  className="workSpace">{space.selectedWorkspace.toUpperCase()}</h6>
                </div>
                <p>{space.address}</p>

                <h4>PKR {space.price}</h4>

            <div className="readMore" onClick={() => redirectToDetail(space._id)}>
                <span>Learn More</span>
            </div>
            </div>
        </div>
        ) : null
    ))
    }

    </div>
</div>
);
};

export default Search;
