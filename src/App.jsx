import React, { useState, useEffect } from 'react';
import './App.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import RootLayout from './Elora/Layouts/RootLayout';
import Home from './Elora/Components/Home';
import About from './Elora/Components/About';
import Shop from './Elora/Components/Shop';
import Blog from './Elora/Components/Blog';
import Contact from './Elora/Components/Contact';
import Pages from './Elora/Components/Pages';
import Men from './Elora/Components/Men';
import Women from './Elora/Components/Women';
import Kids from './Elora/Components/Kids';
import Accessories from './Elora/Components/Accessories';

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            likedProducts={likedProducts}
            likedCount={likedCount}
            toggleHeart={toggleHeart}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="accessories" element={<Accessories />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
