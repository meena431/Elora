import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Contact = () => {

    const position = [13.0429, 80.2337]; 
    const navigate = useNavigate();
    
  return (
    <div className='container-fluid px-3 px-lg-0 px-md-0 animate__animated animate__fadeIn animate__slow'>
      {/* Home Navigation */}
      <p className='pt-3 px-4'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;Contact</span>
      </p>

      <div className='contact-details pt-3 py-5'>
        <div className='row d-flex justify-content-center align-iems-center gap-5'>
          {/* Contact Us Section */}
          <div className='col-lg-5 col-md-5 col-11 px-lg-0 px-md-0 px-3 lh-lg-1 d-flex flex-column gap-3 justify-content-start'>
            <h3>Contact Us</h3>
            <p>"We’re happy to help with any inquiry, Feel free to reach out anytime!"</p>
            <div className='d-flex align-items-center justify-content-start gap-4 mt-1 details'>
              <div className='fs-3'><i className="bi bi-geo-alt"></i></div>
              <div>
                <p className='text-secondary'>Address: </p>
                <p className='fs-lg-5 fs-md-6 fs-6'>63,T-nagar,Chennai.</p>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-4 details'>
              <div className='fs-3'><i className="bi bi-phone"></i></div>
              <div>
                <p className='text-secondary'>Phone: </p>
                <p className='fs-lg-5 fs-md-6 fs-6'>+91 7654893419</p>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-4 details'>
              <div className='fs-3'><i className="bi bi-envelope"></i></div>
              <div>
                <p className='text-secondary'>Email: </p>
                <p className='fs-lg-5 fs-md-6 fs-6'>elorachennai07@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Map Location Section */}
          <div className='col-lg-5 col-md-5 col-11 px-lg-0 px-md-0 px-3 h-50 h-lg-100 h-md-100'>
            <MapContainer center={position} zoom={15} style={{height:'450px',width:'100%'}}>
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={position}>
                <Popup>
                  T. Nagar, Chennai <br /> Elora Shop Location
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className='py-5 px-lg-0 px-md-0 px-3'>
        <div className='row d-flex align-items-start justify-content-center gap-5'>
          {/* FAQ Section */}
          <div className='col-lg-5 col-md-5 col-11 px-3 faq-box'>
            <h3>Frequently Asked Questions</h3>
            <p className='mt-3'>Find quick answers to common questions our customers ask.</p>
            <div className='mt-2'>
              <div>
                <div className='fs-4 d-flex gap-2 align-items-center'>
                <i className="bi bi-question-circle-fill" style={{color:'var(--bs-warning-dim)'}}></i>
                <span className='fs-5'>How long does delivery take?</span>
              </div>
              <div>
                <p className='text-secondary' style={{marginLeft:'32px'}}>Standard delivery takes 3-5 business days.</p>
              </div>
              </div>
              
              <div>
                <div className='fs-4 d-flex gap-2 align-items-center'>
                <i className="bi bi-question-circle-fill" style={{color:'var(--bs-warning-dim)'}}></i>
                <span className='fs-5'>Do you offer cash on delivery (COD)?</span>
              </div>
              <div>
                <p className='text-secondary' style={{marginLeft:'32px'}}>Yes, we offer COD for most locations across India.</p>
              </div>
              </div>
              
              <div>
                <div className='fs-4 d-flex gap-2 align-items-center'>
                <i className="bi bi-question-circle-fill" style={{color:'var(--bs-warning-dim)'}}></i>
                <span className='fs-5'>How can I track my order?</span>
              </div>
              <div>
                <p className='text-secondary' style={{marginLeft:'32px'}}>Use the tracking link sent via email.</p>
              </div>
              </div>

              <div>
                <div className='fs-4 d-flex gap-2 align-items-center'>
                <i className="bi bi-question-circle-fill" style={{color:'var(--bs-warning-dim)'}}></i>
                <span className='fs-5'>How do I contact customer support?</span>
              </div>
              <div>
                <p className='text-secondary' style={{marginLeft:'32px'}}>You can email or use the contact form.</p>
              </div>
              </div>
            </div>
          </div>
          {/* Leave a Comment Section */}
          <div className='col-lg-5 col-md-5 col-11 px-3 comment'>
            <h3>Leave a Comment</h3>
            <p className='mt-3'>Our staff will call back later and answer your questions.</p>
            <div className='mt-3 d-flex flex-column align-items-start justify-content-center gap-4'>
              <div className='d-flex gap-lg-4 gap-md-4 gap-2 flex-lg-row flex-md-row flex-column'>
                <input type="text" placeholder='Your Name: '/>
                <input type="text" placeholder='Your Email: ' />
              </div>
              <textarea name="" id="" placeholder='Your Message: '></textarea>
              <button className='msg-btn'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact