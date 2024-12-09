import React, { useState } from "react";
import Navbar from "../component/NavBar";

const productData = {
  title: "Starlit Mini Dress",
  price: "15,900.00",
  discount: "Get 10% Off on First Purchase",
  sizes: ["XS", "S", "M", "L", "XL"],
  color: { name: "Midnight Ombre", hex: "#3C3B6E" },
  material: "Viscose",
  brand: "callingjune",
  description:
    "Starlit Mini Dress features a tiered skirt adds a playful and dynamic element to your every step, while subtle gold lurex threads add a touch of glamour to the overall allure. The little ruffle detail on the neck adds a hint of romance, enhancing the overall elegance of the piece. Embrace the magic of ombre, the allure of gold, and the grace of ruffles in this captivating dress.",
  images: [
    "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
    "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
    "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
    "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
  ],
};

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]); // Default to the first size

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const productDetails = {
      title: productData.title,
      price: productData.price,
      quantity,
      selectedSize,
      color: productData.color.name,
      brand: productData.brand,
      image: selectedImage,
    };

    // Log the details
    console.log("Product Details:", productDetails);

  };

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
            onClick={handleAddToCart}
            className="bg-[#a20204] text-white px-6 py-3 rounded-lg hover:bg-[#000000] w-full mb-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
