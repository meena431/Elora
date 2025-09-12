import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { products } from './Data';

const CategorySlider = ({
  label,
  slides,
  likedProducts,
  toggleHeart,
  settings,
  reverse = false,
  bgClass,
  imgSrc,
  textClass,
  linkClass,
  navigator,
}) => {
  const navigate = useNavigate();
  const section = (
    <>
      {/* Banner Section */}
      <div className="col-lg-3 col-md-5 col-sm-5 col-10 mb-4 mb-md-0">
        <div className="position-relative" style={{ height: '400px', width: '100%' }}>
          <img className={bgClass} src={imgSrc} />
          <div className={`position-absolute text-white ${textClass} translate-middle`}>
            <h2 style={{ fontSize: '35px' }}>{label}</h2>
            <p
              className={linkClass}
              onClick={() => {
                navigator('/shop');
                window.scrollTo(0, 0);
              }}
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
                textDecoration: 'underline',
                display: 'inline-block',
              }}
            >
              Discover More
            </p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="col-lg-8 col-md-6 col-sm-6 col-11 py-4">
        <Slider {...settings}>
          {slides.map((slide) => {
            const isLiked = likedProducts[slide.id];
            const discount = Math.floor(Math.random() * 21) + 10;
            const discountedPrice = Math.floor(slide.price * (1 - discount / 100));
            return (
              <div
                key={slide.id}
                className="home-products d-flex flex-column align-items-center justify-content-center px-3 position-relative"
                style={{ width: '200px', height: '300px' }}
              >
                <img
                  src={slide.img}
                  alt={slide.name}
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
                <h5 className="mt-3" style={{ fontSize: '18px' }}>{slide.name}</h5>
                <p style={{ color: 'var(--bs-warning-dim)', fontSize: '16px', fontWeight: 'bold' }}>
                  ₹{discountedPrice}
                </p>
                <span className="badge position-absolute top-0 end-0 m-2 me-4 heart-span">
                  <i
                    className={`bi fs-5 ${isLiked ? 'bi-heart-fill text-warning' : 'bi-heart'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleHeart({
                      id: slide.id,
                      name: slide.name,
                      img: slide.img,
                      price: slide.price,
                    })}
                    title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  ></i>
                </span>
                <button className="btn" onClick={() => navigate(`/product/${slide.id}`)}>View Details</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
  
  return (
    <div className="container-fluid px-lg-5 px-md-3 px-1 pb-5 pt-3">
      <div
        className={`row ${reverse ? 'flex-column-reverse' : 'flex-column'} flex-md-row flex-sm-row align-items-center justify-content-center gap-lg-5 gap-md-3 gap-sm-3 gap-1`}
      >
        {reverse ? section.props.children.slice().reverse() : section.props.children}
      </div>
    </div>
  );
};

export default CategorySlider;
