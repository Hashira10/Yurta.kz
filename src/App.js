import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';


import React, { useEffect, useState } from 'react';
import { fetchApartments, fetchApartmentById } from './mockApi';



function App() {

  const [apartments, setApartments] = useState([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState(null); // Инициализация идентификатора квартиры

  useEffect(() => {
    fetchApartments()
      .then((data) => {
        setApartments(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment-list" element={<ApartmentList apartments={apartments} onApartmentClick={(id) => setSelectedApartmentId(id)} />} />
          <Route path="/apartment/:id" element={<ApartmentDetail apartments={apartments} />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
