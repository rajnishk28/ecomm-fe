import React, { useState } from "react";

const OrderSummary = () => {
  // Sample data for the order items
  const [orderItems] = useState([
    { name: "BANDHANI SILK LEHENGA", size: "L", quantity: 4, price: 84000, image: "path/to/image1.jpg" },
    { name: "RED MARODI WORK GOWN", size: "S", quantity: 2, price: 68000, image: "path/to/image2.jpg" },
  ]);

  const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
  const shipping = "Free Shipping within India";
  const estimatedDispatch = "Mon, 06 Jan 2025 - Wed, 15 Jan 2025";
  const total = subtotal; // Assuming no extra charges for simplicity

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-lg font-bold mb-4">Your Order</h2>
      <div className="mb-4">
        {orderItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </div>
            <p className="font-medium">₹{item.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="text-right space-y-2">
        <p className="text-gray-700">Subtotal: ₹{subtotal.toLocaleString()}</p>
        <p className="text-gray-700">Shipping: {shipping}</p>
        <p className="text-gray-700">Estimated Dispatch: {estimatedDispatch}</p>
        <p className="font-bold text-lg">Total: ₹{total.toLocaleString()}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">Payment Method</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentMethod" className="h-4 w-4" />
              <span>Online Payment</span>
            </label>
            <div className="pl-6 text-gray-500 text-sm">
              <p>India:</p>
              <ul className="list-disc list-inside">
                <li>Credit/Debit Card (Visa/MasterCard/Rupay/Diners)</li>
                <li>Netbanking of over 58+ Indian Banks</li>
                <li>UPI (Google Pay/PhonePe/WhatsApp)</li>
              </ul>
              <p>International:</p>
              <ul className="list-disc list-inside">
                <li>Credit/Debit Card (Visa/MasterCard)</li>
              </ul>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>
              Read & agree to the <a href="#" className="text-blue-500 underline">terms and conditions</a> &{" "}
              <a href="#" className="text-blue-500 underline">privacy policy</a>.
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>I consent to receive order updates on SMS.</span>
          </label>
        </div>
      </div>
      <button
        type="button"
        className="mt-6 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
