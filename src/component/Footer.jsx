import React from 'react'
import { FaShoppingBag, FaRocket } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi'; // Reel-like icon for customer support

const Footer = () => {
    return (

        <footer class="bg-black text-white py-10">
            <div class="container mx-auto px-6">
                {/* <!-- Top Section --> */}
                <div className="flex flex-col items-center md:flex-row md:justify-around text-center mb-10">
                    <div className="flex flex-col items-center">
                        <div className="text-6xl mb-2">
                            <FaShoppingBag />
                        </div>
                        <p className="uppercase font-semibold">Shop from across globe</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-6xl mb-2">
                            <FaRocket />
                        </div>
                        <p className="uppercase font-semibold">Free shipping - across India</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-6xl mb-2">
                            <GiFilmSpool />
                        </div>
                        <p className="uppercase font-semibold">Customer Support</p>
                    </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div class="text-center grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                    <div>
                        <h3 class="uppercase font-semibold mb-4">About</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-400">Label Anushree</a></li>
                            <li><a href="#" class="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" class="hover:text-gray-400">Contact Us</a></li>
                            <li><a href="#" class="hover:text-gray-400">Shop Collections</a></li>
                            <li><a href="#" class="hover:text-gray-400">Celebrity Closet</a></li>
                            <li><a href="#" class="hover:text-gray-400">Newsletter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="uppercase font-semibold mb-4">Shop</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-400">Cart</a></li>
                            <li><a href="#" class="hover:text-gray-400">Wishlist</a></li>
                            <li><a href="#" class="hover:text-gray-400">Dashboard</a></li>
                            <li><a href="#" class="hover:text-gray-400">Track Order</a></li>
                            <li><a href="#" class="hover:text-gray-400">Quick Pay</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="uppercase font-semibold mb-4">Legal</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-400">Terms & Conditions</a></li>
                            <li><a href="#" class="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-gray-400">Refunds Policy</a></li>
                            <li><a href="#" class="hover:text-gray-400">Shipping Policy</a></li>
                            <li><a href="#" class="hover:text-gray-400">Disclaimer</a></li>
                            <li><a href="#" class="hover:text-gray-400">Payment Methods</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="uppercase font-semibold mb-4">Customer Care</h3>
                        <ul class="space-y-2">
                            <li><a href="tel:+919619852390" class="hover:text-gray-400">+91-9619852390</a></li>
                            <li><a href="mailto:care@labelanushree.com" class="hover:text-gray-400">care@labelanushree.com</a></li>
                            <li>
                                801, Vastu Precinct, Lokhandwala Complex Road,<br />
                                Andheri West, Mumbai – 400053, India.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Bottom Bar --> */}
                <div class="text-center text-gray-400 mt-10 border-t border-gray-600 pt-4 text-xs">
                    <p>© Label Anushree (Aunshree at White Solitaire Private Limited) • All rights reserved.</p>
                    <p>webWorks by: <a href="#" class="text-white hover:text-gray-400">KDC</a></p>
                </div>
            </div>
        </footer>


    )
}

export default Footer