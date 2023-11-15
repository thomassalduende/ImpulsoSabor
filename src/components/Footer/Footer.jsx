import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-gray-300 mb-2 lg:mb-0">
            Desarrollado &copy; {currentYear}
          </div>
          <hr className="w-full lg:hidden mb-1" />
          <div className="text-gray-300 flex flex-col lg:flex-row lg:items-center">
            <a
              href="https://wa.me/3446652924"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center mr-4 mb-2 lg:mb-0"
            >
              <FaWhatsapp className="mr-1" />
              <b> Contáctanos por WhatsApp</b>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center mb-2 lg:mb-0 ml-0 lg:ml-4"
            >
              <FaInstagram className="mr-1" />
              <b> Síguenos en Instagram </b>
            </a>
            <div className="text-gray-300 mb-2 lg:mb-0 lg:ml-4">
              <b>Encontranos en:</b> Tomás Pauletti y Gral Ramírez
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};