import React, { useState } from "react";
import Navbar from "../component/NavBar";
import OrderSummary from "./OrderSummary";
import Footer from "../component/Footer";

const CheckOut = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        country: "India",
        state: "",
        city: "",
        pinCode: "",
        streetAddress: "",
        shippingDifferent: false,
        orderNotes: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
    };

    return (
        <>
            <Navbar />
            <form
                className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-lg font-bold mb-4">Billing Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name (optional)"
                        className="border rounded-md p-2 w-full"
                    />
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a state
                        </option>
                        {/* Add state options here */}
                        <option value="State1">State1</option>
                        <option value="State2">State2</option>
                    </select>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Town/City"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="PIN Code"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="border rounded-md p-2 w-full mt-4"
                    required
                />
                <div className="mt-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="shippingDifferent"
                            checked={formData.shippingDifferent}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <span>Ship to a different address?</span>
                    </label>
                </div>
                <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                    placeholder="Notes about your order (optional)"
                    className="border rounded-md p-2 w-full mt-4"
                />
                
            </form>
            <OrderSummary/>
            <Footer/>
        </>
    );
};

export default CheckOut;
