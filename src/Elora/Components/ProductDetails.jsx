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
    <div className="container-fluid p-4 p-lg-5 animate__animated animate__slideInDown animate_slow" style={{position: 'relative'}}>
  <button
    style={{ position: 'absolute', right: '0', top: '-2',marginRight:'35px', padding: '5px 10px' }}
    className="cart-btn mt-lg-4 me-lg-5"
    onClick={() => navigate(-1)}
  >
    <i className="bi bi-x-lg"></i>
  </button>

  <div
    className="row d-flex flex-column flex-md-row p-md-5 p-4 gap-3"
    style={{ backgroundColor: 'rgba(143, 141, 141, 0.1)' }}
  >
    <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
      <img
        src={product.img}
        alt={`Product-${product.id}`}
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '8px 8px 4px rgba(0,0,0,.2)',
        }}
      />
    </div>

    <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center gap-2 gap-md-3">
      <h3>{product.name}</h3>
      <h5 className="price mb-2">
        <span
          className="text-decoration-line-through me-2"
          style={{ color: 'var(--bs-warning-lightdim)' }}
        >
          ₹{product.price}
        </span>
        <span className="fw-bold" style={{ color: 'var(--bs-warning-dim)' }}>
          ₹{discountedPrice}
        </span>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus
        corrupti voluptatum! Explicabo, pariatur nostrum.
      </p>

      <div className="d-flex flex-column align-items-start justify-content-center gap-3 w-100">
        <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 size-box">
          <label htmlFor="" style={{ fontSize: '18px' }}>
            Size:
          </label>
          <Dropdown className='me-lg-2'>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Select Size
          </Dropdown.Toggle>

          <Dropdown.Menu className='bg-black ms-lg-3 animate__animated animate__fadeIn animate__slow'>
            <Dropdown.Item className='text-white'>Size: S</Dropdown.Item>
            <Dropdown.Item className='text-white'>Size: L</Dropdown.Item>
            <Dropdown.Item className='text-white'>Size: M</Dropdown.Item>
            <Dropdown.Item className='text-white'>Size: XL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        </div>

        <div className="d-flex align-items-center gap-2 flex-wrap">
          <label htmlFor="" style={{ fontSize: '18px' }}>
            Qty:
          </label>
          <div className="pro-btn-box d-flex align-items-center">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="cart-btn">
              <i className="bi bi-dash"></i>
            </button>
            <span style={{ margin: '0 15px', fontSize: '18px' }}>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="cart-btn">
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>

        <button onClick={addToCart} className="mt-4 add-btn d-flex m-auto m-md-0">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

);
}

export default ProductDetail;
