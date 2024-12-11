import React from 'react';
import Sidebar from "../common/Sidebar";
import { Link } from 'react-router-dom';

const OrdersListPage = () => {
    const orders = [
        { id: 1, customer: 'John Doe', total: '$50', status: 'Pending' },
        { id: 2, customer: 'Jane Smith', total: '$120', status: 'Shipped' },
        { id: 3, customer: 'Sam Wilson', total: '$30', status: 'Delivered' },
    ];

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-50" style={{ marginLeft: '16rem' }}>
                <h1 className="text-2xl font-bold mb-4">Orders</h1>

                <div className="bg-white shadow-lg rounded-md overflow-hidden">
                    <table className="min-w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Total</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-100">
                                    <td className="p-4">{order.id}</td>
                                    <td className="p-4">{order.customer}</td>
                                    <td className="p-4">{order.total}</td>
                                    <td className="p-4">{order.status}</td>
                                    <td className="p-4">
                                        <Link
                                            to={`/admin/orders/${order.id}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersListPage;
