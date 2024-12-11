import React, { useState, useEffect } from "react";
import Navbar from "../component/NavBar";
import { getProductById } from "../Api/services/ProductsService";
import { useParams } from 'react-router-dom';
import Loader from "../component/common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cart.slice"
import Footer from "../component/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null); // Change to null for better initial state handling
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await getProductById(id);
      // console.log(res.product);
      setProductData(res.product);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(); // Fetch product data only if an ID exists
    }
  }, [id]);

  useEffect(() => {
    if (productData) {
      // Once product data is available, set default selected image and size
      setSelectedImage(productData.images[0]);
      setSelectedSize(productData.sizes[0]);
    }
  }, [productData]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = (data) => {
    console.log(data)
      dispatch(addToCart(data)); // Dispatch the product details to the Redux store 
  };

  // Loading state or error handling could be added for better UX
  if (!productData) {
    return <div className="flex justify-center items-center"><Loader /></div>; // Or any loading spinner UI
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 lg:flex lg:gap-8">
        {/* Left Section - Images */}
        <div className="lg:w-1/2">
          <img
            src={selectedImage}
            alt={productData.title}
            className="w-full h-auto rounded-lg mb-4"
          />
          <div className="overflow-x-auto">
            <div className="flex gap-2">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover cursor-pointer rounded-lg border ${selectedImage === image
                    ? "border-blue-500"
                    : "border-gray-300"
                    }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{productData.title}</h1>
          <p className="text-xl text-gray-700 mb-2">Rs. {productData.price}</p>
          <p className="text-green-500 mb-4">{productData.discount}</p>

          <div className="mb-4">
            <h2 className="font-bold mb-2">Size</h2>
            <div className="flex gap-2">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedSize === size ? "bg-gray-200" : ""
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-bold mb-2">Color</h2>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: productData.color.hex }}
              ></div>
              <p>{productData.color.name}</p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-bold mb-2">Material</h2>
            <p>{productData.material}</p>
          </div>

          <p className="text-gray-700 mb-4">By {productData.brand}</p>
          <p className="text-gray-600 mb-4">{productData.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            onClick={()=>handleAddToCart(productData)}
            className="bg-[#a20204] text-white px-6 py-3 rounded-lg hover:bg-[#000000] w-full mb-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductPage;
