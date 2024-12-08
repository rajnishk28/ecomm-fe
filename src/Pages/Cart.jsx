import React from "react";
import Navbar from "../component/NavBar";

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: "Belize Mini Dress",
            size: "XS",
            color: "Black Garden",
            material: "Cotton",
            price: 11900,
            quantity: 1,
            image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",

        },
        {
            id: 2,
            name: "Elizabeth Mini Dress",
            size: "XS",
            color: "White",
            material: "Cotton",
            price: 11900,
            quantity: 1,
            image: "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Your cart</h1>
                <div className="border-t border-gray-200">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex py-6 border-b border-gray-200">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-32 object-cover"
                            />
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-medium">{item.name}</h2>
                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                <p className="text-sm text-gray-600">Color: {item.color}</p>
                                <p className="text-sm text-gray-600">Material: {item.material}</p>
                                <button className="mt-2 text-sm text-red-500">Remove</button>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-lg font-medium">Rs. {item.price.toLocaleString("en-IN")}.00</p>
                                <div className="flex items-center mt-2">
                                    <button className="px-2 py-1 text-gray-600 bg-gray-200">-</button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button className="px-2 py-1 text-gray-600 bg-gray-200">+</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Order Note */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">Order note</label>
                        <textarea
                            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Subtotal and Checkout */}
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-lg font-medium">
                            Subtotal: Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString("en-IN")}.00
                        </p>
                        <button className="px-6 py-3 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
                            CHECKOUT
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        Tax included, shipping and discounts calculated at checkout.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Cart;
