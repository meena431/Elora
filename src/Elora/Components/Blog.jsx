import React from 'react'
import { useNavigate } from 'react-router-dom';
import blog1 from '../img/blog/blog-1.jpg';
import blog2 from '../img/blog/blog-2.jpg';
import blog3 from '../img/blog/blog-3.jpg';
import blog4 from '../img/blog/blog-4.jpg';
import blog5 from '../img/blog/blog-5.jpg';
import blog6 from '../img/blog/blog-6.jpg';
import product3 from '../img/shop-page/product-03.jpg';
import product6 from '../img/shop-page/product-06.jpg';
import product9 from '../img/shop-page/product-09.jpg';
import product14 from '../img/shop-page/product-14.jpg';

const blogs=[
  { id: 1, img: blog1, desc: 'Start Your Day with Style, Flowers, and Self-Love', type: 'TRAVEL', date: 'July 5,2025'},
  { id: 2, img: blog2, desc: 'This was one of our first days in Manali last week', type: 'FASHION', date: 'February 4 ,2025'},
  { id: 3, img: blog3, desc: 'Last week I had my work trip of the year to Berlin', type: 'TRAVEL', date: 'November 28,2024'},
  { id: 4, img: blog4, desc: 'Enjoying Coffee, Crunchy Macarons, and Life’s Gentle Moments', type: 'FASHION', date: 'July 5,2025'},
  { id: 5, img: blog5, desc: 'Your Daily Outfit Inspiration for Slaying with Subtle Style', type: 'MODEL', date: 'July 5,2025'},
  { id: 6, img: blog6, desc: 'Minimal Living Starts with Texture, Simplicity, and Good Design', type: 'FASHION', date: 'July 5,2025'},
]

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className='overflow-x-hidden animate__animated animate__fadeIn animate__slow'>
      {/* Home Navigation */}
      <div className='p-3 px-3'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;Blog</span>
        {/* Main Content */}
        <div className='container-fluid pt-3'>
          {/* Categories-left */}
          <div className='row d-flex flex-lg-row flex-md-row flex-column-reverse align-items-start justify-content-center'>
            <div className='col-lg-3 col-md-3 col-12 pt-3'>
              {/* Search Bar */}
              <div>
                <h4>Search</h4>
                <div className='input-group'>
                  <input type="text" placeholder='Search...' className='px-3 px-md-2 py-1 form-control' />
                  <button className='bg-black px-3 py-1 border-none mt-1'><i className="bi bi-search text-white"></i></button>
                </div> 
                {/* Categories */}
                <div className='categories mt-5'>
                  <h4>Categories</h4>
                  <p className='mt-3'>Travel</p>
                  <p>Fashion</p>
                  <p>Model</p>
                  <p>Picnic</p>
                </div>
                {/* Featured Products */}
                <div className='mt-5'>
                  <h4>Featured Products</h4>
                  <div className='mt-4'>
                    {[
                      { id: 3, category: 'men', img: product3, name: 'Casual Blue Checks', price: '750', arrival: 'old' },
                      { id: 6, category: 'accessories', img: product6, name: 'Midnight Watch', price: '510', arrival: 'old' },
                      { id: 9, category: 'accessories', img: product9, name: 'DualTone Classic', price: '700', arrival: 'new' },
                      { id: 14, category: 'women', img: product14, name: 'Black Rose Tee', price: '400', arrival: 'old' },
                    ].map((featured,id) => (
                      <div className='row g-0 mt-3 featured' key={id}>
                        <div className='col-4'>
                          <img src={featured.img} alt={`Featured Product: ${featured.id}`} className='img-fluid' style={{width:'100px',height:'90px'}} />
                        </div>
                        <div className='col-6 p-2'>
                          <h6>{featured.name}</h6>
                          <p style={{color:'var(--bs-warning-dim)'}}>₹{featured.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Product Tags */}
              <div className='mt-5'>
                <h4>Product Tags</h4>
                <div className='d-flex gap-2 flex-wrap mt-4'>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Men's</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Women's</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Watch</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Shoes</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Kids's</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>T-Shirt</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>OverCoat</p>
                  <p className='border px-3 py-1 rounded-pill p-tag'>Belt</p>
                </div>
              </div>
            </div>
            {/* Blog-right */}
            <div className='col-lg-9 col-md-9 col-12 pt-4'>
              <div className='row d-flex'>  
                {blogs.map((blog) => (
                  <div className='col-lg-6 col-md-6 col-11 mb-4 ms-3 ms-lg-0 ms-md-0' key={blog.id}>
                    <div className='card border-0 blog-card'>
                      <img src={blog.img} alt={`Blog ${blog.id}`}  className='img-fluid blog-img'/>
                      <div className='mt-lg-2 mt-md-1 mt-1'>
                        <h4 className='mt-2'>{blog.desc}</h4>
                        <h6 style={{color:'var(--bs-warning-dim)',marginTop:'10px'}}>{blog.type} <span className='text-secondary'>-{blog.date}</span></h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog