// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-indigo-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div>
            <img src="../src/images/logo.png" alt="Logo" className="w-16 h-16" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>For any further assistance or inquiries, please feel free to contact our customer support team:</p>
            <p>Phone: 1-800-123-4567</p>
            <p>Email: support@example.com</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../src/images/insta.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="../src/images/in.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="../src/images/you.png" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="insta" target="_blank" rel="noopener noreferrer">
            <img src="../src/images/insta.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
