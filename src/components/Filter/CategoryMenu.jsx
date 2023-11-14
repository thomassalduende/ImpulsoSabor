import React, { useState } from 'react';
import { UseFilters } from '../../Context/filters';

export const CategoryMenu = ({ categorias }) => {
    const [showCategories, setShowCategories] = useState(false);
    const { setFilters } = UseFilters();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleChangeCategory = (categoria) => {
        const selected = categoria === 'Todas' ? 'all' : categoria;
        setFilters((prevState) => ({
            ...prevState,
            category: selected,
        }));
        setSelectedCategory(categoria);
        setShowCategories(false);
    };

    const handleCategoriesClick = () => {
        setShowCategories(!showCategories);
    };

    return (
        <div className="relative">
            <div onClick={handleCategoriesClick} className="cursor-pointer">
                Categorias
            </div>
            {showCategories && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bg-white top-8 right-0 mt-2 p-4 flex flex-col gap-2 items-center z-50"
                >
                    <button
                        onClick={() => handleChangeCategory('Todas')}
                        className="cursor-pointer w-full"
                    >
                        Todas
                    </button>
                    {categorias.map((categoria, index) => (
                        <button
                            key={index}
                            onClick={() => handleChangeCategory(categoria)}
                            className={`cursor-pointer w-full ${selectedCategory === categoria ? 'font-bold' : 'font-normal'
                                }`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
