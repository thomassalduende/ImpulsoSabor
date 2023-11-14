import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp, FaBars, FaWindowClose } from 'react-icons/fa';
import styles from './NavBar.module.css';
import { Category } from '../Filter/Category';
import categories from "../../service/categories.json"

export const NavBar = () => {

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const dropdownBar = useRef();

  const handleClickOutside = () => {
    if (!dropdownBar) {
      setDropdownMenu(false);
    }
  };

  useEffect(() => {
    if (dropdownMenu) {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dropdownMenu]);

  const handleDropdownMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };


  const categorias = categories.map(categories => categories.category)


  return (
    <nav className="w-full bg-white drop-shadow-md sticky top-0 z-[200] pr-1 pl-1">
      <ul
        className={`flex gap-4 m-auto max-w-screen-xl h-16 items-center`}
      >
        <li
          onClick={handleDropdownMenu}
          className="md:hidden order-first ml-2 text-2xl"
        >
          {!dropdownMenu ? <FaBars /> : <FaWindowClose />}
        </li>
        <div
          ref={dropdownBar}
          className={`absolute bg-white top-16 left-0 w-2/4 flex flex-col gap-2 items-center z-50 ${styles.dropdownMenu
            } ${dropdownMenu ? styles.dropdownMenuIn : styles.dropdownMenuOut}`}
        >
          <a href="/">
            <li>
              Inicio
            </li>
          </a>
          <Category categorias={categorias} />
          <a href="https://wa.me/3446652924" target="_blank" rel="noopener noreferrer" className="mt-[65vh]">
            <li>
              <FaWhatsapp className="inline-block mr-1" />
              WhatsApp
            </li>
          </a>
        </div>
        <li className="font-light ml-2 max-md:m-auto text-2xl tracking-widest">
          <a href="/">
            <span className="font-bold ">Impulso</span>
            <i>Sabor</i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
