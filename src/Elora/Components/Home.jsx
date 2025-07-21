import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Hero1 from '../img/hero-1.jpg';
import Hero2 from '../img/hero-2.jpg';
import banner1 from '../img/banner-1.jpg';
import banner2 from '../img/banner-2.jpg';
import banner3 from '../img/banner-3.jpg';
import collection1 from '../img/collection-1.jpg';
import './Components.css'

const slides = [
  { id: 1, image: Hero1 },
  { id: 2, image: Hero2 },
  { id: 3, image: Hero1 },
];

const Home = () => {

  const navigator=useNavigate();

  return (
    <div>
      {/* Carousel Slide */}
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
                    <div className="carousel-content col-10 col-md-6 col-lg-7
                  position-relative d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-3 px-md-5">

                      <p className="text-warning animate__animated animate__fadeInUp mt-3">
                        men, women, kids
                      </p>
                      <h1 className="fw-bold mt-2 animate__animated animate__fadeInUp">
                        BLACK FRIDAY
                      </h1>
                      <p className="mt-3 animate__animated animate__fadeInUp">
                        From school runs to weekend strolls — trendy styles for men,
                        women, and kids that keep it comfy and cool.
                      </p>
                      <button className="btn buton mt-3 bg-warning text-white py-2 px-4 animate__animated animate__zoomIn">
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

  {/*   Collection Section     */}

    <div className="container py-5 collection">
      <div className="row justify-content-center gy-4">
        <div className="col-10 col-md-6 col-lg-4  position-relative img-cont">
          <img src={banner1} alt="Men" className="img-fluid w-100 h-100 object-fit-cover rounded" />
          <button
            className="position-absolute top-50 start-50 translate-middle bg-white p-2 px-4 fs-5 border-0 fw-semibold"
            onClick={() => navigator('men')}
          >
            Men's
          </button>
        </div>

        <div className="col-10 col-md-6 col-lg-4  position-relative img-cont">
          <img src={banner2} alt="Women" className="img-fluid w-100 h-100 object-fit-cover rounded" />
          <button
            className="position-absolute top-50 start-50 translate-middle bg-white p-2 px-4 fs-5 border-0 fw-semibold"
            onClick={() => navigator('women')}
          >
            Women's
          </button>
        </div>

        <div className="col-10 col-md-6 col-lg-4  position-relative img-cont">
          <img src={banner3} alt="Kids" className="img-fluid w-100 h-100 object-fit-cover rounded" />
          <button
            className="position-absolute top-50 start-50 translate-middle bg-white p-2 px-4 fs-5 border-0 fw-semibold"
            onClick={() => navigator('kids')}
          >
            Kid's
          </button>
        </div>
      </div>
    </div>


      <div className='container-fluid'>
          <div className='row'>
            <div className='col-3'>
              <img src={collection1} alt="" className='w-100 h-100' />
            </div>

            <div className='col-7'>
                
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
