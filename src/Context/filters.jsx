import { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all'
    })


    const filterProducts = (products, categories) => {

        let filteredProducts = [];

        if (filters.category === 'all') {
            filteredProducts = products;
        } else {
            const selectedCategory = categories.find(category => category.category === filters.category);

            if (selectedCategory) {
                filteredProducts = products.filter((product) => {
                    return product.category === selectedCategory.id;
                });
            } else {

                console.error('Categoría no encontrada');
            }
        }

        return filteredProducts || [];
    };



    return (
        <FilterContext.Provider value={{
            filters,
            setFilters,
            filterProducts
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const UseFilters = () => {
    return useContext(FilterContext);
}