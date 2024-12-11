import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
const OrderDetails = () => {
    const { id } = useParams();
    const order = {
        id: id,
        customer: 'John Doe',
        total: '$50',
        status: 'Pending',
        items: [
            { name: 'Item 1', quantity: 1, price: '$25' },
            { name: 'Item 2', quantity: 2, price: '$12.50' },
        ],
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-50" style={{ marginLeft: '16rem' }}>
                <h1 className="text-2xl font-bold mb-4">Order Details</h1>

                <div className="bg-white shadow-lg rounded-md p-6">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Customer:</strong> {order.customer}</p>
                    <p><strong>Total:</strong> {order.total}</p>
                    <p><strong>Status:</strong> {order.status}</p>

                    <h2 className="text-xl font-bold mt-6 mb-3">Items</h2>
                    <ul className="list-disc pl-6">
                        {order.items.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.quantity} x {item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;