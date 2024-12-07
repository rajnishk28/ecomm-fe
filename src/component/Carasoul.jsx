import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const autoScroll = setInterval(() => {
            handleNext();
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(autoScroll);
    }, [currentIndex]); // Resets interval on index change

    return (
        <div
            className="relative w-full mx-auto overflow-hidden"
            onMouseEnter={() => clearInterval()}
            onMouseLeave={() => setCurrentIndex((prev) => prev)} // Resumes auto-scroll
        >
            {/* Images */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={handlePrev}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
                <FaChevronLeft />
            </button>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
                <FaChevronRight />
            </button>

            {/* Dots for smaller screens */}
            <div className="flex justify-center mt-4 mb-4 md:hidden">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
