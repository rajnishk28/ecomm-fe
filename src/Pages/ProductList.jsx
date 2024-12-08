import React from 'react'
import Navbar from "../component/NavBar"
import { Link } from 'react-router-dom';
const items = [
    { id: 1, title: "Red Patola Lehenga", price: "₹148,000", image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", },
    { id: 2, title: "Mirai Croptop Cape Skirt Set", price: "₹30,000", image: "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", },
    {
        id: 3, title: "Utsav Lehenga", price: "₹30,000", image: "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
    },
    {
        id: 5, title: "Suni Croptop Cape Set", price: "₹38,000", image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    },
    { id: 16, title: "Red Patola Lehenga", price: "₹148,000", image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", },
    { id: 26, title: "Mirai Croptop Cape Skirt Set", price: "₹30,000", image: "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", },
    {
        id: 13, title: "Utsav Lehenga", price: "₹30,000", image: "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
    },
    {
        id: 84, title: "Suni Croptop Cape Set", price: "₹38,000", image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    }

];

const ProductList = () => {
    return (<>
        <Navbar />
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-semibold mb-4">Showing 1–20 of 521 results</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item,index) => (
                    <> <Link to={`/product/${index}`}>
                        <div
                            key={item.id}
                            className="bg-white shadow-md  overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-sm font-bold text-gray-800">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600">{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    </>
                ))}
            </div>
        </div>
    </>
    )
}

export default ProductList