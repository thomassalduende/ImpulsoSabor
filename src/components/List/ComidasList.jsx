import { useEffect, useState } from "react"
import { Product } from "../Product/Product.jsx"
import productos from "../../products.json"
export const ComidasList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl py-8">
      {
        productos.map((food) => <Product key={food.id} product={food} />)
      }
    </div>
  )
}