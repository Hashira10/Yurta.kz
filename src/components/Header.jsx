import React from 'react';
import './Header.css'; // Импорт стилей
import NavBar from './NavBar';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Logo" style={{ width: '20%' }} />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
