import React from 'react';
import { Link } from 'react-router-dom';
function ApartmentList({ apartments }) {
  return (
    <div>
      <h2>Список квартир для аренды</h2>
      <ul>
        {apartments.map((apartment) => (
          <li key={apartment.id}>
          <Link to={`/apartment/${apartment.id}`}>{apartment.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentList;