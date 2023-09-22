import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Наша компания занимается...</p>
      </div>
      <div className="footer-section">
        <h3>Useful links</h3>
        <ul>
          <li><a href="#">Ссылка 1</a></li>
          <li><a href="#">Ссылка 2</a></li>
          {/* Добавьте другие ссылки по аналогии */}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help</h3>
        <p>Если у вас возникли вопросы, свяжитесь с нами:</p>
        <p>support@example.com</p>
      </div>
      <div className="footer-section">
        <h3>Contacts</h3>
        <address>
          <p>Location: г. Ваш город, ул. Ваша улица</p>
          <p>Number: +7 (123) 456-7890</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
