export const Product = ({ product }) => {
  return (
    <div className="mx-auto my-8 w-64 h-auto md:w-80 md:h-auto shadow-md overflow-hidden bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 rounded-lg">
      <div className="text-black flex flex-col">
        <img src={product.images} alt={product.nombre} className="w-full h-48 md:h-56 object-cover object-center" />
        <div className="p-4">
          <h2 className="text-xl font-bold mt-2">{product.nombre}</h2>
          <p className="text-gray-800 mt-2 font-semibold"> ${product.precio}</p>
          <p className="text-sm text-gray-700 mt-2">{product.descripcion}</p>
        </div>
      </div>
    </div>
  );
};
