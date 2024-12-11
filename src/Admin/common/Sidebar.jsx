import React from 'react';
import { FaBox, FaUserAlt, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-black text-white shadow-lg flex flex-col">
            {/* Logo or Brand Name */}
            <div className="p-4 bg-gray-900 text-center text-lg font-bold">
                Admin Panel
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li>
                        <Link
                            to={"/admin"}
                            className="flex items-center p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                            <FaBox className="mr-3" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/admin/orders"}
                            className="flex items-center p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                            <FaBox className="mr-3" /> Orders
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/admin/add-products"}
                            className="flex items-center p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                            <FaBox className="mr-3" />Add Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/admin/profile"}
                            className="flex items-center p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                            <FaUserAlt className="mr-3" /> Profile Details
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/admin/settings"}
                            className="flex items-center p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                            <FaCogs className="mr-3" /> Settings
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4">
                <button
                    onClick={() => alert('Logged out')}
                    className="flex items-center justify-center w-full p-3 text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md"
                >
                    <FaSignOutAlt className="mr-3" /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;