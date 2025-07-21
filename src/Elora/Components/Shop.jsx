import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMemo } from 'react';

import product1 from '../img/shop-page/product-01.jpg';
import product2 from '../img/shop-page/product-02.jpg';
import product3 from '../img/shop-page/product-03.jpg';
import product4 from '../img/shop-page/product-04.jpg';
import product5 from '../img/shop-page/product-05.jpg';
import product6 from '../img/shop-page/product-06.jpg';
import product7 from '../img/shop-page/product-07.jpg';
import product8 from '../img/shop-page/product-08.jpg';
import product9 from '../img/shop-page/product-09.jpg';
import product10 from '../img/shop-page/product-10.jpg';
import product11 from '../img/shop-page/product-11.jpg';
import product12 from '../img/shop-page/product-12.jpg';
import product13 from '../img/shop-page/product-13.jpg';
import product14 from '../img/shop-page/product-14.jpg';
import product15 from '../img/shop-page/product-15.jpg';

const Shop = () => {
  const { likedProducts, toggleHeart } = useOutletContext();
  const navigate = useNavigate();

  const products = [
    { id: 1, category: 'kids', img: product1, name: 'Cozy Chocolate OverCoat', price: '1500', arrival: 'new' },
    { id: 2, category: 'women', img: product2, name: 'Classic White Shirt', price: '950', arrival: 'new' },
    { id: 3, category: 'men', img: product3, name: 'Casual Blue Checks', price: '750', arrival: 'old' },
    { id: 4, category: 'women', img: product4, name: 'Warm Brown OverCoat', price: '2500', arrival: 'new' },
    { id: 5, category: 'kids', img: product5, name: 'Cool Breeze T-Shirt', price: '1300', arrival: 'old' },
    { id: 6, category: 'accessories', img: product6, name: 'Midnight Watch', price: '510', arrival: 'old' },
    { id: 7, category: 'women', img: product7, name: 'Crimson Hooded Coat', price: '2400', arrival: 'new' },
    { id: 8, category: 'women', img: product8, name: 'Clean Cut T-Shirt', price: '1700', arrival: 'old' },
    { id: 9, category: 'accessories', img: product9, name: 'DualTone Classic', price: '700', arrival: 'new' },
    { id: 10, category: 'women', img: product10, name: 'Blackout T-Shirt', price: '955', arrival: 'old' },
    { id: 11, category: 'men', img: product11, name: 'Blue Boxed Classic', price: '2100', arrival: 'old' },
    { id: 12, category: 'accessories', img: product12, name: 'Classic Brown Belt', price: '350', arrival: 'new' },
    { id: 13, category: 'kids', img: product13, name: 'Blue Core T-Shirt', price: '1240', arrival: 'new' },
    { id: 14, category: 'women', img: product14, name: 'Black Rose Tee', price: '400', arrival: 'old' },
    { id: 15, category: 'men', img: product15, name: 'Black Classic', price: '670', arrival: 'new' },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  }, []);

  const categories = [
  { label: 'Men', key: 'men', icon: 'bi bi-person-fill' },
  { label: 'Women', key: 'women', icon: 'bi bi-person-standing-dress' },
  { label: 'Kids', key: 'kids', icon: 'bi bi-emoji-smile-fill' },
  { label: 'Accessories', key: 'accessories', icon: 'bi bi-watch' },
  { label: 'New Arrivals', key: 'new', icon: 'bi bi-stars' },
  { label: 'Under ₹999', key: 'under999', icon: 'bi bi-cash-coin' },
];

  const [selectCategory, setSelectCategory] = useState('All');
  const [sortOption,setSortOption]=useState('');

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  const filteredProducts = useMemo(() => {
  return products
    .filter((product) => {
      if (selectCategory === 'All') return true;
      if (selectCategory === 'under999') return +product.price < 999;
      if (selectCategory === 'new') return product.arrival === 'new';
      return product.category === selectCategory.toLowerCase();
    })
    .sort((a, b) => {
      if (sortOption === 'priceLowHigh') return +a.price - +b.price;
      if (sortOption === 'priceHighLow') return +b.price - +a.price;
      if (sortOption === 'newest') return b.id - a.id;
      return 0;
    });
}, [selectCategory, sortOption]);


  return (
    <div className="container-fluid shop-carousel-wrapper">
      {/* Home Navigation */}
      <p className='p-2 px-3'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;Shop</span>
      </p>
      {/* Categories */}
      <div className='d-flex gap-3 align-items-center categories' style={{ whiteSpace: 'nowrap' }}>
        {/* All Products */}
        <div
          className={`fw-bold hover d-flex flex-shrink-0 ms-lg-4 underline-animate ${    selectCategory === 'All' ? 'active' : ''}`}
          style={{ fontSize: '18px', cursor: 'pointer'}}
          onClick={() => handleCategoryChange('All')}
        >
         <i className="bi bi-bag-fill"  style={{color:'var(--bs-warning-dim)'}} ></i>&nbsp; All Products
        </div>
        {/* Category Lists */}
        <div className='scrollable-nav flex-grow-1 overflow-auto'>
          <ul className='d-flex flex-nowrap gap-3 gap-lg-4 align-items-center mb-0 px-2 ps-lg-4'>
            {categories.map(({ label, key, icon }) => (
              <li
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`underline-animate d-flex align-items-center gap-1 ${selectCategory === key ? 'text-warning fw-bold' : 'text-dark'}`}
                style={{ cursor: 'pointer', fontSize: '18px' }}
              >
                <i className={`${icon}`} style={{color:'var(--bs-warning-dim)'}}></i>&nbsp;
                {label}
              </li>
            ))}
          </ul>

        </div>
        {/* SortOption Button */}

        <Dropdown className='me-lg-2'>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            <i className="bi bi-sort-down"></i> Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu className='bg-black ms-lg-3 animate__animated animate__fadeIn animate__slow'>
            <Dropdown.Item className='text-white' onClick={() => setSortOption('priceLowHigh')}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item className='text-white' onClick={() => setSortOption('priceHighLow')}>Price: High to Low</Dropdown.Item>
            <Dropdown.Item className='text-white' onClick={() => setSortOption('newest')}>Newest First</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
      {/* Product List */}
      <div className='productList pt-lg-2'>
        <div className='row px-3'>
          {filteredProducts.map((product) => {
            const isLiked = likedProducts[product.id];
            const discount = Math.floor(Math.random() * 21) + 10;
            const discountedPrice = Math.floor(product.price * (1 - discount / 100));

            return (
              // Product Card
              <div key={product.id} id={`product-${product.id}`} className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 animate__animated animate__fadeIn animate__slow'>
                <div className='card h-100 border-0 shadow-sm position-relative'>
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className='card-img-top object-fit-cover'
                    style={{ height: '320px', objectPosition: 'top' }}
                  />
                  <div className='card-body text-center'>
                    <span className='badge position-absolute top-0 start-0 m-2'
                      style={{ backgroundColor: 'var(--bs-warning-dim)' }}>
                      {product.arrival === 'new' ? 'New' : ''}
                    </span>
                    {/* Heart Button */}
                    <span className='badge position-absolute top-0 end-0 m-2 heart-span'>
                      <i
                        className={`bi fs-5 ${isLiked ? 'bi-heart-fill text-warning' : 'bi-heart'}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleHeart({
                          id: product.id,
                          name: product.name,
                          img: product.img,
                          price: product.price,
                        })}
                        title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      ></i>
                    </span>
                    {/* Product Name */}
                    <h6 style={{ fontSize: '17px' }}>{product.name}</h6>
                    {/* Product Price */}
                    <div className="price mb-2">
                      <span className="text-muted text-decoration-line-through me-2">₹{product.price}</span>
                      <span className="fw-bold text-dark">₹{discountedPrice}</span>
                    </div>

                    {/* Add to Cart */}
                    <button className='btn btn-outline-dark btn-sm'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
