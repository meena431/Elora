import React from 'react'
import logo1 from '../img/logo-carousel/logo-1.png';
import logo2 from '../img/logo-carousel/logo-2.png';
import logo3 from '../img/logo-carousel/logo-3.png';
import logo4 from '../img/logo-carousel/logo-4.png';
import logo5 from '../img/logo-carousel/logo-5.png';
import payment from '../img/payment-method.png'

const logos=[
  {id:1, img:logo1},
  {id:2, img:logo2},
  {id:3, img:logo3},
  {id:4, img:logo4},
  {id:5, img:logo5},
]

const Footer = () => {
  return (
    <div className='overflow-x-hidden pt-5'>
      {/* Logos */}
      <div className='container-fluid bg-dark'>
        <div className='row d-flex gap-2 gap-md-3 gap-lg-3 align-items-center justify-content-center py-4'>
            {logos.map((logo)=> (
              <div key={logo.id} className='col-lg-2 col-md-3 col-3'>
                <img src={logo.img} alt={`Logo-${logo.id}`} className='img-fluid' />
              </div>
            ))}
        </div>
      </div>

      {/* Footer Main Content */}
      <div className='container-fluid bg-black py-5 px-0 px-lg-5 px-md-3 ps-4'>
        <div className='row d-flex gap-5 gap-md-4 gap-lg-4 align-items-start justify-content-lg-center justify-content-start ms-2'>
          <div className='col-lg-3 col-md-5 col-sm-6 col-12 text-white-50 py-0'>
            <div>
              <h3 className='text-white'><span>Elora</span><div style={{width:'6px',height:'6px',backgroundColor:'var(--bs-warning-dim)',display:'inline-block'}}></div></h3>
            </div>
            <p className='mt-4'>Address: 63,T-nagar,Chennai.</p>
            <p>Phone: +91 7654893419</p>
            <p>Email: elorachennai07@gmail.com</p>
            <div className='d-flex gap-3 fs-3'>
              <i class="bi bi-twitter mt-2"></i>
              <i class="bi bi-facebook mt-2"></i>
              <i class="bi bi-whatsapp mt-2"></i>
              <i class="bi bi-instagram mt-2"></i>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-4 col-12 text-white-50'>
            <h5 className='text-white'>Information</h5>
            <p className='mt-4'>About Us</p>
            <p>Checkout</p>
            <p>Contact</p>
            <p>Services</p>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-4 col-12 text-white-50'>
            <h5 className='text-white'>Help</h5>
            <p className='mt-4'>Track Order</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>FAQs</p>
          </div>
          <div className='col-lg-4 col-md-5 col-sm-6 col-12'>
            <h5 className='text-white'>Join Our Newsletter Now</h5>
            <p className='text-white-50 mt-4'>Get E-mail updates about our latest shop and special offers.</p>
            <div className='d-flex flex-nowrap overflow-auto'>
              <input type="search" placeholder='Enter Your Mail' className='ps-1 px-lg-4 px-md-2 py-2 footer-input'/>
              <button style={{backgroundColor:'var(--bs-warning-dim)',color:'white',border:'none',padding:'10px 15px',fontSize:'14px'}}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRights Footer */}
      <div className='container-fluid bg-black pt-3' style={{borderTop:'0.5px solid rgba(255, 255, 255, 0.1)'}}>
        <div className='row text-white-50 d-flex align-items-start'>
          <div className='col-lg-6 col-md-12 d-flex align-items-center justify-content-center'>
            <p>Copyright@2025 All right reserved | Shop smart. Shop stylish. Only at <strong style={{color:'var(--bs-warning-dim)'}}>Elora</strong><span><div style={{width:'6px',height:'6px',color:'white'}}></div></span></p>
          </div>
          <div className='col-lg-5 col-md-12 d-flex align-items-center justify-content-lg-end justify-content-md-center justify-content-center'>
            <img src={payment} alt="Payment Methods"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer