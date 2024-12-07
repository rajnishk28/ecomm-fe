import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = ({ closeModal }) => {
    const closeLoginModal = () => {
        closeModal(false);
        document.body.style.overflow = "auto";
    };

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full  max-w-lg bg-white  shadow-lg p-8">
                {/* Close Button */}
                <button
                    onClick={closeLoginModal}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                    ✕
                </button>
                {/* Modal Content */}

                <form className="w-full p-4">
                    <div className="mb-6">

                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <FaUserAlt className="text-gray-500" />
                            </span>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                className="block w-full pl-10 p-3 border border-gray-300  shadow-sm  sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="mb-6">

                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <FaLock className="text-gray-500" />
                            </span>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="block w-full pl-10 p-3 border border-gray-300 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Lost your password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md shadow-md hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;