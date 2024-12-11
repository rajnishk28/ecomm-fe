import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cart.slice"


const CartModal = ({ closeCartModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value);
    // console.log("cartitem from redux",cartItems)

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const closeCart = () => {
        closeCartModal(false);
    };

    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300 ease-in-out">
            <div className="cart-modal bg-white w-96 h-full p-8 fixed top-0 right-0 shadow-lg overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={closeCart}
                    className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800"
                >
                    &times;
                </button>

                {/* Header */}
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold uppercase">Your Cart</h2>
                    <span className="inline-block w-12 border-b-2 border-black mt-2"></span>
                </div>

                {/* Cart Items */}
                <div className="mt-8 space-y-6">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center border-b pb-4"
                        >
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded mr-4"
                            />
                            {/* Product Details */}
                            <div className="flex-grow">
                                <h3 className="text-sm font-bold">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Qty: {item.quantity}
                                </p>
                                <p className="text-sm text-gray-800 font-semibold">
                                    ₹{item.price.toLocaleString()}
                                </p>
                            </div>
                            {/* Remove Button */}
                            <button
                                className="text-gray-500 hover:text-red-500"
                                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                {/* Cart Total */}
                <div className="mt-8 border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Totals</span>
                        <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 flex space-x-4">
                    <button
                        className="w-1/2 bg-gray-700 text-white py-2 rounded hover:bg-gray-900"
                        onClick={() => navigate("/cart")}
                    >
                        View Cart
                    </button>
                    <button
                        className="w-1/2 bg-black text-white py-2 rounded hover:bg-gray-800"
                        onClick={() => navigate("/checkout")}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
