import React, { useEffect, useState } from 'react'
import Navbar from "../component/NavBar"
import { Link } from 'react-router-dom';
import { getAllProduct } from "../Api/services/ProductsService"
import Loader from "../component/common/Loader"


const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllProductS = async () => {
        setLoading(true);
        try {
            const res = await getAllProduct();
            console.log(res.data)
            setProduct(res.data)
        } catch (error) {
            console.log(error.message)
        }
        setLoading(false);
    }
    useEffect(() => {
        getAllProductS();
    }, [])
    return (<>
        <Navbar />{loading ? <Loader /> :
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-semibold mb-4">Showing 1–20 of 521 results</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.map((item, index) => (
                        <> <Link to={`/product/${item._id}`}>
                            <div
                                key={item.id}
                                className="bg-white shadow-md  overflow-hidden"
                            >
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="p-4 tracking-widest font-semibold font-cormorant ">
                                    <h2 className="text-md font-bold text-gray-800">
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

        }

    </>
    )
}

export default ProductList