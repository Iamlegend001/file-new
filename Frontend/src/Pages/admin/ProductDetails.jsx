import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncCreateProduct, asyncDeleteProduct, asyncUpdateProduct } from "../../Store/Actions/productActions";
import { useForm } from "react-hook-form";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const users = useSelector((state) => state.user.users);
  const product = products?.find((product) => product.id == id);
  console.log(product,users);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      image:product?.image,
      title:product?.title,
      price:product?.price,
      category:product?.category,
      description:product?.description,
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (product) => {
    console.log(product);
    dispatch(asyncUpdateProduct(id,product));
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-600">Product not found</h2>
      </div>
    );
  }
  const DeleteHandler = ()=>{
    dispatch(asyncDeleteProduct(id))
    navigate("/products")
  }


  return product? (
    <>
      {/* Product Display Section */}
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
            alt={product.title}
          />
        </div>
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> {product.catagory}
          </p>
          <p className="text-3xl font-semibold text-green-600">₹ {product.price}</p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Update Form */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4">
        <div className="max-w-lg w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
          <div className="text-center mb-6">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Update Product</h2>
            <p className="mt-1 text-sm text-gray-500">Modify your product details below</p>
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                {...register("image")}
                id="image"
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter product image URL"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                {...register("title")}
                id="title"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter product title"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                {...register("price")}
                id="price"
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter price (e.g. 99.99)"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                {...register("description")}
                id="description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Write product description"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                {...register("category")}
                id="category"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Enter product category"
              />
            </div>

            <div> <button
           onClick={DeleteHandler}
                
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:opacity-90 transition shadow-lg"
              >
                Delete product
              </button>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:opacity-90 transition shadow-lg"
              >
                Update Product
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  ): "Loading...."
};

export default ProductDetails;
