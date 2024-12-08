import React from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
    {
        id: 1,
        name: "Bandhani & Silk Lehenga",
        price: 21000,
        quantity: 3,
        image: "https://labelanushree.com/wp-content/uploads/2024/09/LASTA35-01-400x600.jpg",
        removeFromCart: (id) => {/* handle item removal */ }
    },
    {
        id: 2,
        name: "Red Marodi Work Gown",
        price: 34000,
        quantity: 1,
        image: "https://labelanushree.com/wp-content/uploads/2024/05/LAKAI32-01-400x600.jpg",
        removeFromCart: (id) => {/* handle item removal */ }
    }, {
        id: 1,
        name: "Bandhani & Silk Lehenga",
        price: 21000,
        quantity: 3,
        image: "https://labelanushree.com/wp-content/uploads/2024/09/LASTA35-01-400x600.jpg",
        removeFromCart: (id) => {/* handle item removal */ }
    },
    {
        id: 2,
        name: "Red Marodi Work Gown",
        price: 34000,
        quantity: 1,
        image: "https://labelanushree.com/wp-content/uploads/2024/05/LAKAI32-01-400x600.jpg",
        removeFromCart: (id) => {/* handle item removal */ }
    }
];


const CartModal = ({ closeCartModal }) => {
    const navigate = useNavigate();
    const closeCart = () => {
        closeCartModal(false); // Close the cart modal
    };
    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
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
                                onClick={() => item.removeFromCart(item.id)}
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
                        onClick={() => alert("Checkout clicked")}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
