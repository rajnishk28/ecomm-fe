import React from 'react';
import { Link } from 'react-router-dom';


const Cards = ({ items, heading }) => {
    return (
        <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="flex items-center my-8">
                <hr className="flex-grow border-t border-gray-300" />
                <h1 className="px-4 text-2xl tracking-widest font-semibold font-cormorant  text-center text-gray-800">{heading}</h1>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {items.map((item, index) => (<> <Link to={`/product/${item.name}`}>
                    <div key={index} className="max-w-full mx-auto">
                        <img

                            className="w-full h-96 object-cover flex-shrink-0"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="p-4 flex flex-col justify-center items-center">
                            <h5 className="mb-2 text-sm leading-6 font-bold text-gray-900">{item.name}</h5>
                            <p className="font-medium text-gray-700">₹{item.price}</p>
                        </div>

                    </div>
                </Link></>

                ))}
            </div>

        </div>
    );
};

export default Cards;
