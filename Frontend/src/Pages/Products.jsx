import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  console.log(products);

  const renderProduct = products.map((product) => {
    return (
      <div key={product.id} className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain mb-4 rounded"
        />
        <h1 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h1>
        <p className="text-sm text-gray-600 mb-3">
          {product.description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-600 font-bold text-lg">${product.price}</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
        <div className="mt-3 text-right">
          <Link
            to={`/product/${product.id}`}
            className="text-sm text-blue-500 hover:underline"
          >
            More Info
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Products</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {renderProduct}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl">Loading...</div>
      )}
    </div>
  );
};

export default Products;
