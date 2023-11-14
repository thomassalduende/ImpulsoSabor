import React, { useState } from 'react';
import { UseFilters } from '../../Context/filters';
import { MdKeyboardArrowDown, MdKeyboardControlKey } from "react-icons/md";

export const Category = ({ categorias }) => {
    const [showCategories, setShowCategories] = useState(false);
    const { setFilters } = UseFilters();

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleChangeCategory = (categoria) => {

        const selected = categoria === 'Todas' ? 'all' : categoria;


        setFilters((prevState) => ({
            ...prevState,
            category: selected
        }));
        setSelectedCategory(categoria);
        setShowCategories(false);
    };

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    return (
        <li onClick={handleCategoriesClick}>
            Categorias
            {showCategories ? (
                <MdKeyboardControlKey className='inline-block' />
            ) : (
                <MdKeyboardArrowDown className='inline-block' />
            )}
            {showCategories && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute bg-white top-[90px] h-[50%] left-15 w-2/4 flex flex-col gap-2 items-center z-50`}
                >
                    <button onClick={() => handleChangeCategory('Todas')} className='cursor-pointer h-12 md:h-16 px-4 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full transition duration-300 ease-in-out hover:bg-gray-300 transform hover:scale-105'>
                        Todas
                    </button>
                    {categorias.map((categoria, index) => (
                        <button
                            key={index}
                            onClick={() => handleChangeCategory(categoria)}
                            className={`cursor-pointer h-12 md:h-16 px-4 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 w-[150%] transition duration-300 ease-in-out hover:bg-gray-300 transform hover:scale-105 ${selectedCategory === categoria ? 'font-bold' : 'font-normal'}`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>
            )}
        </li>
    );
};
