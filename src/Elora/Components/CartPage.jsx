import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartPage = () => {
  useEffect(() =>{
    window.scroll(0,0)
  })

  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  const total = (Array.isArray(state.cartItems) ? state.cartItems : []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCharge = 50;
  const grandTotal = total + shippingCharge;

  const [country, setCountry] = useState("");
  const [stateName, setStateName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = () => {
  // ✅ Validate required fields
  if (!country || !stateName || !address.trim() || !phone.trim()) {
    Swal.fire({
      icon: "error",
      title: "Missing Details ⚠️",
      text: "Please fill in all shipping details before checkout.",
      confirmButtonColor: "var(--bs-warning)",
      background: "#fff",
      color: "#333",
      customClass: {
        title: "my-swal-title",
        popup: "rounded-3 shadow-sm"
      }
    });
    return;
  }

  // ✅ Phone number format check (optional)
  const validPh = /^[0-9]{10}$/;
  if (!validPh.test(phone)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone 📱",
      text: "Please enter a valid 10-digit phone number.",
      confirmButtonColor: "var(--bs-warning)",
      background: "#fff",
      color: "#333",
      customClass: {
        title: "my-swal-title",
        popup: "rounded-3 shadow-sm"
      }
    });
    return;
  }

  // ✅ Success alert
  Swal.fire({
    icon: "success",
    title: "Checkout Successful 🛍️",
    html: `
      <div style="font-size:14px; margin-top:5px; line-height:1.5;">
        Thank you for shopping with <b>Elora</b>! <br/>
        Your order has been placed successfully. <br/>
        We'll send you a confirmation email and keep you updated.
      </div>
    `,
    width: 450,
    padding: "1.5rem",
    showConfirmButton: true,
    confirmButtonText: "Continue Shopping",
    confirmButtonColor: "var(--bs-warning)",
    background: "#fff",
    color: "#333",
    customClass: {
      title: "my-swal-title",
      popup: "rounded-3 shadow-sm"
    }
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/shop");
    }
  });
};

  if (state.cartItems.length === 0) {
    return <h2 className="p-5 text-center">Your cart is empty</h2>;
  }

  return (
    <div className="container-fluid animate__animated animate__fadeIn animate__slow">
      {/* Home Navigation */}
      <p className='pt-3 px-4'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;Cart</span>
      </p>
      <div className="row gap-4 align-items-start justify-content-center">
        {/* LEFT - CART ITEMS */}
        <div className="col-md-7">
          <div
            className="table-responsive cart-table-container"
            style={{
              maxHeight: "80vh", 
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <table className="table align-middle table-bordered text-center mb-0">
              <thead className="table-light sticky-top">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {state.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ maxWidth: "80px",maxHeight:'80px',position:'top' }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm update-btn"
                          onClick={() =>
                            dispatch({
                              type: "Update_Qty",
                              payload: { id: item.id, quantity: item.quantity - 1 },
                            })
                          }
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm update-btn"
                          onClick={() =>
                            dispatch({
                              type: "Update_Qty",
                              payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                          }
                        >
                          <i className="bi bi-plus-lg"></i>
                        </button>
                      </div>
                    </td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger remove-btn btn-sm"
                        onClick={() =>
                          dispatch({ type: "Remove_From_Cart", payload: item.id })
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT - SHIPPING + TOTAL */}
        <div className="col-md-4 pb-4">
          <div className="sticky-top" style={{ top: "90px" }}>
            <div className="card shadow-sm">
            {/* TOTAL */}
              <div className="card-body">
                <h4>Cart Summary</h4>
                <div className="d-flex justify-content-between pt-1">
              <span>Subtotal:</span>
              <strong>₹{total}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping:</span>
              <strong>₹{shippingCharge}</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between pb-3">
              <span>Grand Total:</span>
              <strong>₹{grandTotal}</strong>
            </div>

                <div className="card shadow-sm">
                <div className="card-body shipping-cont">
                  {/* Shipping Details */}
                  <h4 className="mb-3">Shipping Details</h4>
                  {/* Country */}
                  <Dropdown className="mb-3 ">
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      color="inherit"
                      className="w-100 text-start"
                    >
                      {country || "Select State"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {["Tamil Nadu", "Kerala", "Karnataka","Andhra Pradesh","Puducherry"].map((c) => (
                        <Dropdown.Item key={c} onClick={() => setCountry(c)}>
                          {c}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* State */}
                  <Dropdown className="mb-3">
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      className="w-100 text-start drop-district"
                    >
                      {stateName || "Select District"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {["Ariyalur", "Chennai", "Coimbatore","Dindigul","Tiruvarur"].map((s) => (
                        <Dropdown.Item key={s} onClick={() => setStateName(s)}>
                          {s}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Address */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    className="btn text-white w-100 py-2"
                    onClick={handleCheckout}
                    style={{backgroundColor:'var(--bs-warning-dim)',border:'none',fontSize:'17px'}}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .cart-table-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;
