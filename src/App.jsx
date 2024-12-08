import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductDetails';
import Footer from './component/Footer'
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';

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
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App