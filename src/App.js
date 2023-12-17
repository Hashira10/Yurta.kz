import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';
import Profile from './components/Profile';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import "./App.css";
import React, { useEffect, useState } from 'react';
import { fetchApartments } from './mockApi';

function App() {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  const [apartments, setApartments] = useState([]);
  
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
    <div id="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment-list" element={<ApartmentList apartments={apartments} />} />
          <Route path="/apartment/:id" element={<ApartmentDetail apartments={apartments} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
