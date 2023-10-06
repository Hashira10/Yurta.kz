import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApartmentById } from '../mockApi';

function ApartmentDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    // Загрузка данных о квартире по идентификатору
    fetchApartmentById(parseInt(id, 10))
      .then((data) => {
        setApartment(data);
      })
      .catch((error) => {
        console.error('Error loading apartment data:', error);
      });
  }, [id]);

  if (!apartment) {
    return <div>The apartment was not found.</div>;
  }

  return (
    <div>
      <h2>{apartment.name}</h2>
      <p>Address: {apartment.address}</p>
      <p>Price: {apartment.price} tg. per month</p>
      {/* Другие детали квартиры */}
    </div>
  );
}

export default ApartmentDetail;



