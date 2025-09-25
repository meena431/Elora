import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState, useRef, useEffect } from 'react';
import './Header.css';
import { useCart } from '../Context/CartContext';
import SearchBar from '../Components/SearchBar';

const Header1 = ({ likedProducts = {}, likedCount = 0, toggleHeart}) => {

  const [showLikedList, setShowLikedList] = useState(false);
  const wishlistRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { state = {} } = useCart() || {};
  const cartCount = state.cartItems?.length || 0;
  const total = (Array.isArray(state.cartItems) ? state.cartItems : []).reduce((sum, item) => sum + item.price * item.quantity, 0);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        setShowLikedList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const likedItems = Object.values(likedProducts);
  const validLikedItems = likedItems.filter(item => item && item.id && item.name);

  return (
    <Navbar bg="light" expand="lg" className="py-2 border-bottom sticky-lg-top">
        <Container fluid className="header2-wrap d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center gap-3">

          {/* Brand */}
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-baseline px-3 py-1 ms-lg-4">
            <span className="fs-2 fw-bold">Elora&nbsp;</span>
            <div style={{ width: 6, height: 6, backgroundColor: 'var(--bs-warning-dim)', display: 'inline-block' }} />
          </Navbar.Brand>

          {/* Search Button */}
          <SearchBar />

          {/* WishList */}
          <div className="icons-wrap d-flex align-items-center gap-3 order-1 order-lg-2 ms-lg-auto me-2">
            <div ref={wishlistRef} className="position-relative">
              <Button variant="link" className="text-dark fs-3 p-0 ms-lg-2 position-relative" onClick={() => setShowLikedList(prev => !prev)}>
                <i className="bi bi-heart" />
                <Badge text="white" className="position-absolute top-0 start-100 translate-middle badge-count" style={{ fontSize: '12px', backgroundColor: 'var(--bs-warning-dim) !important' }}>
                  {validLikedItems.length}
                </Badge>
              </Button>

              {/* WishList Dropdown */}
              {showLikedList && (
              <ul
                className={`position-absolute shadow rounded p-3 mt-1 likedList ${showLikedList ? 'show' : ''}`}
                style={{ zIndex: 1050, minWidth: '240px' }}
              >
                {validLikedItems.length > 0 ? (
                  validLikedItems.map((item) => {
                    const discount = Math.floor(Math.random() * 21) + 10;
                    const discountedPrice = Math.floor(item.price * (1 - discount / 100));

                    return (
                      <li key={item.id} className="wishlist-li d-flex align-items-start justify-content-between gap-2 mb-2 position-relative">
                        <div
                         onClick={() => {
                            if (location.pathname !== '/shop') {
                              navigate(`/shop#product-${item.id}`);
                            } else {
                              const el = document.getElementById(`product-${item.id}`);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });

                                el.classList.add('highlight');
                                setTimeout(() => el.classList.remove('highlight'), 3000);
                              }
                            }
                            setShowLikedList(false);
                          }}

                          style={{ cursor: 'pointer' }}
                          className="d-flex align-items-center gap-2 flex-grow-1"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              objectPosition: 'top',
                              borderRadius: '4px',
                            }}
                          />
              <div className='ps-1'>
              <div style={{ fontSize: '16px'}}>{item.name}</div>
              <div>
                  <span className='text-decoration-line-through small ms-1' style={{color:'var(--bs-warning-lightdim)'}}>₹{item.price}</span>&nbsp;
                  <span style={{color:'var(--bs-warning-dim)'}}>₹{discountedPrice}</span>
              </div>
            </div>
            {/* Remove Button */}
            <button
              className="btn btn-sm flex-shrink-0 position-absolute end-0"
              style={{ marginTop: '6px' }}
              onClick={(e) => {
                e.stopPropagation();
                toggleHeart(item);
              }}
            >
              <i className="bi bi-trash text-black fs-5"></i>
            </button>
          </div>

            
          </li>
          );
        })
      ) : (
        <li className="text-muted text-center">No Liked Items</li>
      )}
    </ul>
  )}
  </div>

            {/* Cart button */}
            <Button variant="link" className="text-dark fs-3 p-0 position-relative" onClick={() => navigate('/cart')}>
              <i className="bi bi-cart" />
              <Badge text="white" className="position-absolute top-0 start-100 translate-middle badge-count" style={{ fontSize: '12px', backgroundColor: 'var(--bs-warning-dim) !important' }}>{cartCount}</Badge>
            </Button>
            {/* Cart Amount */}
            <span className="fs-5 me-lg-3">₹&nbsp;{total}</span>
            {/* Login Button */}
            <button className="btn d-flex align-items-center gap-2 text-white px-3 py-1 fs-5 me-lg-4" style={{ backgroundColor: 'black' }}>
              <i className="bi bi-person"/> Login
            </button>
          </div>
        </Container>
      </Navbar>
  )
}

export default Header1