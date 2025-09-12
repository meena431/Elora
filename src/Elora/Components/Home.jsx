import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategorySlider from './CategorySlider';
import { products, insta, blogs, perks } from './Data';

import Hero1 from '../img/hero-1.jpg';
import Hero2 from '../img/hero-2.jpg';
import banner1 from '../img/banner-1.jpg';
import banner2 from '../img/banner-2.jpg';
import banner3 from '../img/banner-3.jpg';

import bag from '../img/time-bg.jpg';
import './Components.css';

const slides = [
  { id: 1, image: Hero1 },
  { id: 2, image: Hero2 },
  { id: 3, image: Hero1 },
];

const m_slides = products.filter(item => item.category === 'men')
const w_slides = products.filter(item => item.category === 'women')
const k_slides = products.filter(item => item.category === 'kids')

function TimeBox({ label, value }) {
  return (
    <div className="text-center px-3 py-2 border rounded-3 bg-light shadow-sm">
      <div className="fw-bold fs-3" style={{ color: 'var(--bs-warning)' }}>{value}</div>
      <div className="text-muted small">{label}</div>
    </div>
  );
}

const Home = () => {
  const navigator = useNavigate();
  const { likedProducts, toggleHeart } = useOutletContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 820, settings: { slidesToShow: 1 } },
    ],
  };

  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  const d = Math.floor(timeLeft / (24 * 3600));
  const h = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className='animate__animated animate__fadeIn animate__slow'>

      {/* -----Carousel Slide------ */}
      <div className="home-carousel-wrapper">
        <Carousel fade interval={3000} indicators={true} variant="dark">
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div
                className="d-block carousel-slide"
                style={{
                  height: '90vh',
                  width: '100%',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="container-fluid h-100 d-flex align-items-center">
                  <div className="row">
                    <div className="carousel-content col-10 col-md-6 col-lg-7 position-relative d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-3 px-md-5">
                      <p className="text-warning animate__animated animate__fadeInUp mt-3">
                        men, women, kids
                      </p>
                      <h1 className="fw-bold mt-2 animate__animated animate__fadeInUp">
                        BLACK FRIDAY
                      </h1>
                      <p className="mt-3 animate__animated animate__fadeInUp">
                        From school runs to weekend strolls — trendy styles for men, women, and kids that keep it comfy and cool.
                      </p>
                      <button
                        className="btn buton mt-3 bg-warning text-white py-2 px-4 animate__animated animate__zoomIn"
                        onClick={() => {
                          navigator('/shop');
                          window.scroll(0, 0);
                        }}
                      >
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* -------Collection Section------- */}
      <div className="container py-5 collection">
        <div className="row justify-content-center gy-4">
          {[{img: banner1, label: "Men", link: "men"},
            {img: banner2, label: "Women", link: "women"},
            {img: banner3, label: "Kids", link: "kids"}].map((item, index) => (
              <div key={index} className="col-10 col-md-6 col-lg-4 position-relative img-cont">
                <img src={item.img} alt={item.label} className="img-fluid w-100 h-100 object-fit-cover rounded" />
                <button
                  className="position-absolute top-50 start-50 translate-middle bg-white p-2 px-4 fs-5 border-0 fw-semibold"
                  onClick={() => {
                    navigator('/shop')
                    window.scroll(0,0)
                  }}
                >
                  {item.label}'s
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* -----Women Section------ */}
      <CategorySlider
        label="Women's"
        slides={w_slides}
        likedProducts={likedProducts}
        toggleHeart={toggleHeart}
        settings={settings}
        reverse={false}
        bgClass="women-container"
        textClass="women-content"
        linkClass="women-content-hover"
        navigator={navigator}
      />

      {/* -----Men Section------ */}
      <CategorySlider
        label="Men's"
        slides={m_slides}
        likedProducts={likedProducts}
        toggleHeart={toggleHeart}
        settings={settings}
        reverse={true}
        bgClass="men-container"
        textClass="men-content"
        linkClass="men-content-hover"
        navigator={navigator}
      />

      {/* -----Deal of the Week------ */}
      <div className="container pb-5 pt-3">
        <div
          className="row mx-1 bag-image"
          style={{
            backgroundImage: `url(${bag})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div className="col-lg-5 col-md-7 col-12 px-4 py-5 mx-lg-5 d-flex flex-column align-items-center justify-content-center gap-2 text-center">
            <h1>Deal of the Week</h1>
            <div style={{ width: '100px', border: '2px solid var(--bs-warning)' }}></div>
            <p className="pt-2">Grab the deal of the week — our best-selling handbag is now yours at an exclusive limited-time price.</p>
            <p>
              <span style={{ color: 'var(--bs-warning)', fontSize: '20px', fontWeight: 'bold' }}>₹250 Only</span>/HandBag
            </p>
            <div className="d-flex gap-3 align-items-center py-3">
              <TimeBox label="Days" value={formatTime(d)} />
              <TimeBox label="Hours" value={formatTime(h)} />
              <TimeBox label="Mins" value={formatTime(m)} />
              <TimeBox label="Secs" value={formatTime(s)} />
            </div>
            <button
              className="text-white px-4 py-2 fs-5 deal-btn"
              style={{ backgroundColor: 'var(--bs-warning)', border: 'none' }}
              onClick={() => {
                navigator('/shop');
                window.scroll(0, 0);
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* ------Kids Section------ */}
      <CategorySlider
        label="Kids's"
        slides={k_slides}
        likedProducts={likedProducts}
        toggleHeart={toggleHeart}
        settings={settings}
        reverse={false}
        bgClass="kids-container"
        textClass="women-content"
        linkClass="women-content-hover"
        navigator={navigator}
      />

      {/* -----Instagram Section------ */}
      <div className="container-fluid pb-5 pt-3">
        <div className="row justify-content-center">
          {insta.map((image) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-11 g-0 position-relative insta-container" key={image.id}>
              <img
                src={image.img}
                alt=""
                className="img-fluid insta-img"
                style={{ width: '100%', height: '300px' }}
              />
              <div className="insta-overlay position-absolute d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-instagram fs-2 text-white"></i>
                <p className="text-white mb-0 fs-5">@elora_shop</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------Blog Section------- */}
      <div className="container pb-4 pt-2">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>From the Blog</h1>
          <div style={{ width: '100px', border: '2px solid var(--bs-warning)' }}></div>
        </div>

        <div className="row justify-content-center g-4 pt-5">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-5 col-11 mb-4 ms-3 ms-lg-0 ms-md-0" key={blog.id}>
              <div className="card border-0 blog-card">
                <img src={blog.img} alt={`Blog ${blog.id}`} className="img-fluid blog-img" />
                <div className="mt-lg-2 mt-md-1 mt-1">
                  <h4 className="mt-2">{blog.desc}</h4>
                  <h6 style={{ color: 'var(--bs-warning-dim)', marginTop: '10px' }}>
                    {blog.type} <span className="text-secondary"> - {blog.date}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="women-content-hover d-flex justify-content-center"
          onClick={() => {
            navigator('/blog');
            window.scrollTo(0, 0);
          }}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '18px',
            textDecoration: 'underline',
          }}
        >
          Discover More
        </p>
      </div>

      {/* -------Perks Section------- */}
      <div className="container pb-5">
        <div className="row">
          {perks.map((img, index) => (
            <div className="col-12 col-md-4 d-flex justify-content-center" key={index}>
              <div
                className="d-flex align-items-center gap-4 perk-container"
                style={{
                  backgroundColor: 'rgba(244, 243, 218, 0.2)',
                  boxShadow: '2px 2px 4px rgba(125, 124, 124, 0.2)',
                  padding: '15px 35px',
                  borderRadius: '10px',
                }}
              >
                <div style={{ color: 'var(--bs-warning-dim)', fontSize: '42px' }}>{img.icon}</div>
                <div className="lh-1">
                  <h6 className="mb-1" style={{ fontSize: '18px' }}>{img.perk}</h6>
                  <p className="mb-0">{img.perk_cont}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
