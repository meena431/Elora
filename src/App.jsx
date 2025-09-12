import React, { useState, useEffect, useReducer } from 'react';
import './App.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import RootLayout from './Elora/Layouts/RootLayout';
import Home from './Elora/Components/Home';
import About from './Elora/Components/About';
import Shop from './Elora/Components/Shop';
import Blog from './Elora/Components/Blog';
import Contact from './Elora/Components/Contact';
import Offers from './Elora/Components/Offers';
import CartPage from './Elora/Components/CartPage';
import ProductDetails from './Elora/Components/ProductDetails';
import { useCart } from './Elora/Context/CartContext';

const App = () => {
  const [likedProducts, setLikedProducts] = useState(() => {
    try {
      const stored = localStorage.getItem('likedProducts');
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.error("JSON Parse Error:", err);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleHeart = (product) => {

     if (!product?.id || !product?.name || !product?.img || !product?.price) return; 
    setLikedProducts(prev => {
      const updated = { ...prev };
      if (updated[product.id]) {
        delete updated[product.id];
      } else {
        updated[product.id] = product;
      }
      return updated;
    });
  };

  const likedCount = Object.keys(likedProducts).filter(item => item && item.id && item.name).length;

  const { state,dispatch } = useCart();
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            likedProducts={likedProducts}
            likedCount={likedCount}
            toggleHeart={toggleHeart}
            dispatch={dispatch}
          />
        }
      >
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="/product/:id" element={
          <ProductDetails/>
        }/>        
        <Route path="cart" element={<CartPage/>} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="offers" element={<Offers />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
