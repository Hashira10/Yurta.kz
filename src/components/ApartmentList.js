import React from 'react';
import { Link } from 'react-router-dom';
import "./ApartmentList.css";
import { useState } from 'react';

function ApartmentList({ apartments }) {
  const [filterRooms, setFilterRooms] = useState('all'); 
  
  const handleFilterChange = (event) => {
    setFilterRooms(event.target.value);
  };

 
  const filteredApartments = apartments.filter((apartment) => {
    if (filterRooms === 'all') {
      return true; 
    }
    return apartment.rooms === filterRooms;
  });
  
  return (
    <div className="apartment-list">
      <h2>List of apartments for rent</h2>

      <label>
        Filter by number of rooms:
        <select value={filterRooms} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="1">1 room</option>
          <option value="2">2 rooms</option>
          <option value="3">3 rooms</option>
          
        </select>
      </label>

      <div className="apartment-cards">
      {filteredApartments.length > 0 ? ( 
        filteredApartments.map((apartment) => (
          <div key={apartment.id} className="apartment-card">
            <Link to={`/apartment/${apartment.id}`}>
              <img src={apartment.image} alt={apartment.name} />
            </Link>
            <h3>{apartment.name}</h3>
            <p>Price: {apartment.price} tg. per month</p>
            <Link to={`/apartment/${apartment.id}`}>More</Link>
          </div>
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  </div>
  );
}

export default ApartmentList;

