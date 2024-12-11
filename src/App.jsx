import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import CheckOut from "./Pages/CheckOut"

//Admin Page Starts from Here
import AdminHomePage from "./Admin/home/Home"
import AdminOrderDetails from "./Admin/orders/OrderDetails"
import AdminOrderList from "./Admin/orders/OrdersListPage"
import AdminProfile from "./Admin/profile/ProfileDetails"
import AdminSettingsPges from "./Admin/settings/Settings"
import AdminAddProduct from "./Admin/addProduct/AddProduct"

const App = () => {

  // Usage Example:

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>

        {/* Admin Routes Starts From Here */}
        <Routes>
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/orders" element={<AdminOrderList />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/settings" element={<AdminSettingsPges />} />
          <Route path="/admin/add-products" element={<AdminAddProduct />} />
        </Routes>
      </Router>

    </>
  )
}

export default App