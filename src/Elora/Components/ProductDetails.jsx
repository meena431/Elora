import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { products } from "./Data";
import './Components.css'
import Swal from "sweetalert2";

const ProductDetail = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const { id } = useParams();
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div style={{ padding: 12 }}>Product not found</div>;

  const addToCart = () => {
    dispatch({ type: "Add_To_Cart", payload: {...product,quantity}});

    Swal.fire({
      icon:'success',
      title:'Added to Cart Successfully',
      showConfirmButton:true,
      confirmButtonColor:'var(--bs-warning-dim)',
      background: "#fff",
      color: "#333",
      width:'400px',
      customClass:{
        title:'my-swal-title'
      }
    })
  };

  const discount = Math.floor(0.01 * 21) + 10;
  const discountedPrice = Math.floor(product.price * (1 - discount / 100));

  return (
    <div className="container-fluid p-5 animate__animated animate__slideInDown animate_slow">
      <button style={{position:'absolute', right:'0',margin:'28px 65px',padding:'5px 10px'}} className="cart-btn" onClick={() => navigate(-1)}><i className="bi bi-x-lg"></i></button>
      <div className="row p-5" style={{backgroundColor:'rgba(143, 141, 141, 0.1)'}}>
        <div className="col-5">
          <img src={product.img} alt={`Product-${product.id}`} 
            style={{
              width:'300px',
              height:'400px',
              objectPosition:'center',
              borderRadius:'10px',
              boxShadow:'8px 8px 4px rgba(0,0,0,.2)'
            }}
          />
        </div>
        <div className="col-6 d-flex flex-column align-items-start justify-content-center gap-2">
          <h3>{product.name}</h3>
          <h5 className="price mb-2">
            <span className="text-decoration-line-through me-2" style={{color:'var(--bs-warning-lightdim)'}}>₹{product.price}</span>
            <span className="fw-bold" style={{color:'var(--bs-warning-dim)'}}>₹{discountedPrice}</span>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus corrupti voluptatum! Explicabo, pariatur nostrum.</p>
          <div className="d-flex flex-column align-items-start justify-content-center gap-2">
            <div className="d-flex align-items-center justify-content-center gap-4 size-box">
              <label htmlFor="" style={{fontSize:'18px'}}>Size: </label>
              <Dropdown className='me-lg-2'>
                <Dropdown.Toggle id="dropdown-basic">
                    Select size
                </Dropdown.Toggle>

                <Dropdown.Menu className='drop-menu animate__animated animate__fadeIn animate__slow' style={{backgroundColor:'rgb(156, 151, 151)',width:'200px'}}>
                  <Dropdown.Item className='text-black' >Size S</Dropdown.Item>
                  <Dropdown.Item className='text-black' >Size M</Dropdown.Item>
                  <Dropdown.Item className='text-black' >Size L</Dropdown.Item>
                  <Dropdown.Item className='text-black' >Size XL</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mt-3 d-flex">
              <label htmlFor="" style={{fontSize:'18px'}}>Qty: </label>
              <div className="pro-btn-box">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="cart-btn"><i className="bi bi-dash"></i></button>
                <span style={{ margin: "0 15px",fontSize:'18px' }}>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="cart-btn"><i className="bi bi-plus-lg"></i></button>
              </div>
            </div>
            <button onClick={addToCart} className="mt-4 add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
