import React from 'react'
import { useNavigate } from 'react-router-dom';
import about1 from '../img/about-01.jpg';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='animate__animated animate__fadeIn animate__slow'>
      {/* Home Navigation */}
      <p className='pt-3 px-3'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;About</span>
      </p>
      {/* Hero Section */}
      <div className='w-100 text-center p-5 shadow' style={{backgroundColor:'rgb(248, 248, 209)'}}>
        <h1 className='animate__animated animate__zoomIn'>About <span style={{color:'var(--bs-warning-dim)'}}>Elora</span></h1>
        <h6 className='pt-2 animate__animated animate__fadeInTopRight animate__slow'>Where Everyday Style Meets Effortless Confidence</h6>
      </div>
      {/* Our Story Section */}
      <div className='container-fluid' style={{backgroundColor:'rgba(246, 241, 223, 0.5)'}}>
        <div className='row d-flex align-items-center justify-content-center py-5'>
          <div className='col-lg-6 col-md-6 col-11'>
            <h2 className='text-black'>Our Story</h2>
            <p>
              <p className='pt-1'>At Elora, we believe shopping should be joyful and effortless. What began as a small local idea has grown into a vibrant online destination for curated fashion, beauty, home, and lifestyle essentials. <br />
              Our mission? To make everyday shopping exciting, affordable, and accessible to all. Whether you're chasing trends or timeless picks, we deliver quality and style right to your doorstep.
            </p>
            <div>
              <strong className='fs-5'>Built on three promises:</strong> <br />
              <div style={{ lineHeight: '2rem'}}>
                <i className="bi bi-star-fill" style={{ color: 'var(--bs-warning-dim)',fontSize:'1.3rem' }}></i> Quality You Can Feel <br />
                <i className="bi bi-truck" style={{ color: 'var(--bs-warning-dim)',fontSize:'1.3rem' }}></i> Delivery You Can Count On <br />
                <i className="bi bi-heart-fill" style={{ color: 'var(--bs-warning-dim)',fontSize:'1.3rem' }}></i> Service You Can Trust
              </div>
            </div>
            <p style={{color:'black',fontStyle:'italic'}}>
                Thank you for being a part of it. Let's keep shopping beautifully—together.
            </p>
            </p>
          </div>
          <div className="col-md-5 col-lg-5 col-12 d-flex align-items-center justify-content-center" style={{ overflow: 'visible', padding: '1rem' }}>
            <img
              src={about1}
              alt="Our Story"
              className="img-fluid animate__animated animate__fadeIn"
              style={{
                objectFit: 'cover',
                width: '370px',
                height: '365px',
                boxShadow: '12px 12px 2px rgba(249, 241, 11, 0.25)',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="py-5" style={{backgroundColor:'rgba(253, 249, 146, 0.25)'}}>
        <div className="container text-center pt-1">
          <h2 style={{ color: 'var(--bs-warning-dim)', marginBottom: '1rem' }}>
            Why Choose <span style={{ color: '#000' }}>Elora</span>?
          </h2>
          <p className="mb-4 text-muted">We go beyond just shopping — we build trust with every cart.</p>
          
          <div className="row justify-content-center">
            {[
              { icon: 'bi-bag-check', title: 'Curated Collections', desc: 'Trendy & timeless products chosen with care.' },
              { icon: 'bi-truck', title: 'Fast Delivery', desc: 'Speedy, safe, and trackable orders to your doorstep.' },
              { icon: 'bi-currency-rupee', title: 'Affordable Prices', desc: 'Style that doesn’t break the bank.' },
              { icon: 'bi-arrow-repeat', title: 'Easy Returns', desc: 'Hassle-free returns with a customer-first policy.' },
            ].map((feature, id) => (
              <div className="col-md-6 col-lg-3 col-10 mb-4" key={id}>
                <div className="p-3 shadow-sm bg-white rounded h-100 hover-effect animate-card">
                  <i className={`bi ${feature.icon}`} style={{ fontSize: '2rem', color: 'var(--bs-warning-dim)' }}></i>
                  <h5 className="mt-2">{feature.title}</h5>
                  <p style={{ fontSize: '14px', color: '#555' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 