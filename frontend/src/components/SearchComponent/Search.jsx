import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, filteredData } from "../../features/searchSlice";

import axios from 'axios';
import "./Search.css";

const Search = () => {
const dispatch = useDispatch();
const [cityTerm, setCityTerm] = useState('');
const [selectedWorkspace, setSelectedWorkspace] = useState('');
const filterData = useSelector((state) => state.search.filteredData);

useEffect(() => {
const fetchDataFromDatabase = async () => {
    try {
    const response = await axios.get('/api/v1/allSpaces');
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

return (
<div>
    <div className="all-space-section-bg">
    <div className="overlay"></div>
    <div className="all-space-content-container">
        <div className='space-heading'>ALL SPACES</div>
        <div className="breadcrumb-position">
        <li>zarar</li>
        </div>
    </div>
    </div>

    {/* <div className="search-container"> */}
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
            <option value="Coworking Space">Coworking Space</option>
            <option value="Residential Space">Residential Space</option>
          </select>
    <button className='searchbtn search-input' onClick={handleSearch}>Search</button>
    </form>
    {/* </div> */}
    <h1 className='discover'>"Discover an array of dynamic spaces waiting to elevate your work experience"</h1>

    <div className="spaces-sections">
{
    filterData.map((space) => (
    <div key={space._id} className="card" >
                <img src={space.interiorImages[0]} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{space.selectedWorkspace.toUpperCase()}</h5>
                    <p className="card-text"> {space.description}</p>
                    <div className="readMore">
                        <span>
                            READ ME
                        </span>
                    </div>
                </div>
        </div>

    ))}
    </div>
</div>
);
};

export default Search;
