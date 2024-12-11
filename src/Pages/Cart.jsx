import React from "react";
import Navbar from "../component/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cart.slice";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value)
console.log("cartItems from redux ",cartItems)
const removeCart = (_id) => {
    console.log("Removing item with _id:", _id);
    dispatch(removeFromCart({ _id })); // Pass the _id as part of the payload
};

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Your cart</h1>
                <div className="border-t border-gray-200">
                    {cartItems?.map((item) => (
                        <div key={item._id} className="flex py-6 border-b border-gray-200">
                            <img
                                src={item?.images[0]}
                                alt={item.brand}
                                className="w-24 h-32 object-cover"
                            />
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-medium">{item?.title}</h2>
                                <p className="text-sm text-gray-600">Size: {item?.sizes[0]}</p>
                                <p className="text-sm text-gray-600">Color: {item?.color.name}</p>
                                <p className="text-sm text-gray-600">Material: {item?.material}</p>
                                <button 
                                 onClick={() => removeCart(item._id)}
                                className="mt-2 text-sm text-red-500">Remove</button>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-lg font-medium">Rs. {item?.price.toLocaleString("en-IN")}.00</p>
                                <div className="flex items-center mt-2">
                                    <button className="px-2 py-1 text-gray-600 bg-gray-200">-</button>
                                    <span className="px-3">{item?.quantity}</span>
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
                        <button
                            onClick={() => navigate("/checkout")}
                            className="px-6 py-3 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
                            CHECKOUT
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        Tax included, shipping and discounts calculated at checkout.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Cart;
