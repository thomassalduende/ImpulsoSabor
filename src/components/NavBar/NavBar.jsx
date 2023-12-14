import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp, FaBars, FaWindowClose } from 'react-icons/fa';
import styles from './NavBar.module.css';
import { Category } from '../Filter/Category';
import categories from "../../service/categories.json";
import { CategoryMenu } from '../Filter/CategoryMenu';

export const NavBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const dropdownBar = useRef();

  const handleDropdownMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };

  const closeMenu = () => {
    setDropdownMenu(false);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX && !dropdownMenu) {
      return;
    }

    const touchCurrentX = e.touches[0].clientX;
    const touchDifference = touchCurrentX - touchStartX;

    if (touchStartX && touchDifference > 50) {
      closeMenu();
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dropdownMenu]);

  const categorias = categories.map((category) => category.category);

  return (
    <nav className="w-full bg-white drop-shadow-md sticky top-0 z-[200] pr-1 pl-1">
      <ul className={`flex gap-4 m-auto max-w-screen-xl h-16 items-center`}>
        <li onClick={handleDropdownMenu} className="md:hidden order-first ml-2 text-2xl">
          {!dropdownMenu ? <FaBars /> : <FaWindowClose />}
        </li>
        <div
          ref={dropdownBar}
          className={`absolute bg-white top-16 left-0 w-2/4 flex flex-col gap-2 items-center z-50 ${styles.dropdownMenu} ${dropdownMenu ? styles.dropdownMenuIn : styles.dropdownMenuOut
            }`}
        >
          <a href="/">
            <li>
              Inicio
            </li>
          </a>
          <Category categorias={categorias} />
          <a
            href="https://wa.me/3446652924"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[65vh]">
            <li>
              <FaWhatsapp className="inline-block mr-1" />
              WhatsApp
            </li>
          </a>
        </div>
        <li className="font-light ml-2 max-md:m-auto text-2xl tracking-widest">
          <a href="/">
            <span className="font-bold">Impulso</span>
            <i>Sabor</i>
          </a>
        </li>
        <li className='sm:ml-[45%] mr-4 max-[768px]:hidden lg:ml-[60%]'>
          <CategoryMenu categorias={categorias} />
        </li>
        <a
          href="https://wa.me/3446652924"
          target="_blank"
          rel="noopener noreferrer"
          className='max-[768px]:hidden'>
          <li>
            <FaWhatsapp className="inline-block mr-2" />
            WhatsApp
          </li>
        </a>
      </ul>
    </nav>
  );
};
