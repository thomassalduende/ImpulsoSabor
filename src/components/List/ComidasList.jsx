import { useEffect, useState } from "react"
import { Product } from "../Product/Product.jsx"
import productos from "../../service/products.json"
import { UseFilters } from "../../Context/filters.jsx"
import categories from '../../service/categories.json'

export const ComidasList = () => {

  const { filterProducts } = UseFilters();

  const filter = filterProducts(productos, categories);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl py-8">
      {
        Array.isArray(filter) && filter.map((food) => <Product key={food.id} product={food} />)
      }
    </div>
  )
}