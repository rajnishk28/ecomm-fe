import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // Import icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Login from "./Auth/Login";
import CartModal from "./CartModal"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const openCartModal = () => {
    setCartModalOpen(true); // Open the cart modal
  };



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-9 bg-white shadow- font-sans text-xs font-bold">
        <div className="flex items-center space-x-4">
          <button onClick={openLoginModal} className="text-gray-600 hover:text-gray-800">Login</button>
          <button className="text-gray-600 hover:text-gray-800">
            <FiSearch size={20} />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/shop" className="hover:text-gray-500 text-[#000000] ">SHOP</a>
          <a href="#collections" className="hover:text-gray-500">COLLECTIONS</a>
          <a href="/" className="hover:text-gray-500">
            <img src="https://labelanushree.com/wp-content/uploads/2021/03/la_wordmark-dark_menu.jpg" alt="" />
          </a>
          <a href="#about" className="hover:text-gray-500">ABOUT</a>
          <a href="#contact" className="hover:text-gray-500">CONTACT</a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={openCartModal}
            className="relative text-gray-600 hover:text-gray-800">
            <FiShoppingCart size={30} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
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
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                      <a href="/shop" className="block hover:text-gray-500">
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

      {/* Render Modals */}
      {loginModal && <Login closeModal={setLoginModal} />}
      <div> {cartModalOpen && <CartModal closeCartModal={setCartModalOpen} />}</div>

    </div>
  );
};

export default Navbar;
