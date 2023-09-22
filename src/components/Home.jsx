import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
    <div className="home-page">
      <div className="welcome">
        <h1>Добро пожаловать на страницу дома</h1>
        <p>Здесь вы найдете информацию о наших домах и предложениях.</p>
      </div>
      <div className="image-container">
        <img src="src/images/welcomeHome.jpg" alt="Изображение дома" />
      </div>
    </div>
  );
}

export default Home;
