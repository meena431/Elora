import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMemo } from 'react';
import { products } from './Data';
import { useLocation } from 'react-router-dom';


const Shop = () => {

  const { likedProducts, toggleHeart } = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
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
  { label: 'Trending Now', key: 'hot', icon: 'bi bi-stars' },
  { label: 'Under ₹999', key: 'under999', icon: 'bi bi-cash-coin' },
];

  const [selectCategory, setSelectCategory] = useState('All');

  useEffect(() => {
    if(location.state?.category){
      setSelectCategory(location.state.category);
    }
  }, [location.state]);
  const [sortOption,setSortOption]=useState('');

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  const filteredProducts = useMemo(() => {
  return products
    .filter((product) => {
      if (selectCategory === 'All') return true;
      if (selectCategory === 'under999') return +product.price < 999;
      if (selectCategory === 'hot') return product.arrival === 'hot';
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
    <div className="container-fluid shop-carousel-wrapper pb-4 animate__animated animate__fadeIn animate__slow">
      {/* Home Navigation */}
      <p className='p-3 px-3'>
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
          {filteredProducts.map((product,index) => {
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
                    <span className='badge position-absolute top-0 start-0 m-2 px-2 py-1 bg-danger'
                      style={{ backgroundColor: 'var(--bs-warning-dim)' }}>
                      {product.arrival === 'hot' ? 'Hot' : ''}
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

                    {/* View Details */}
                    <button className='btn' onClick={() => navigate(`/product/${product.id}`)}>
                      View Details
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
