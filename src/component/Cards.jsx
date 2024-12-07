import React from 'react';

const Cards = ({ items,heading }) => {
    return (
        <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="flex items-center my-8">
                <hr className="flex-grow border-t border-gray-300" />
                <h1 className="px-4 text-2xl font-bold text-center text-gray-800">{heading}</h1>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-full mx-auto"
                    >
                        <img
                            className="w-full h-screen object-cover"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="p-4">
                            <h5 className="mb-2 text-lg font-bold text-gray-900">{item.name}</h5>
                            <p className="font-medium text-gray-700">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
