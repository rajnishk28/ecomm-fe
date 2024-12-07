import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // Import icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-9 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Login</button>
          <button className="text-gray-600 hover:text-gray-800">
            <FiSearch size={20} />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#shop" className="hover:text-gray-500">Shop</a>
          <a href="#collections" className="hover:text-gray-500">Collections</a>
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
            <FiShoppingCart size={20} />
          </button>
          <button
            className="lg:hidden text-xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => toggleDropdown("shop")}
                className="flex justify-between w-full hover:text-gray-500"
              >
                Shop
                <span>{dropdownOpen === "shop" ? "-" : "+"}</span>
              </button>
              {dropdownOpen === "shop" && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li>
                    <a href="#cape" className="block hover:text-gray-500">
                      Cape Coolest Set
                    </a>
                  </li>
                  <li>
                    <a href="#modern" className="block hover:text-gray-500">
                      Modern Collection
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("collections")}
                className="flex justify-between w-full hover:text-gray-500"
              >
                Collections
                <span>{dropdownOpen === "collections" ? "-" : "+"}</span>
              </button>
              {dropdownOpen === "collections" && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li>
                    <a href="#spring" className="block hover:text-gray-500">
                      Spring Set
                    </a>
                  </li>
                  <li>
                    <a href="#summer" className="block hover:text-gray-500">
                      Summer Collection
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#about" className="block hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

          {/* Close Button */}
          <button
            className="p-4 bg-gray-800 text-white w-full text-center"
            onClick={toggleMenu}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
