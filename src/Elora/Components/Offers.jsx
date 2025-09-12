import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css'

export default function Offers() {
  const [timer, setTimer] = useState(7200);
  const [claimed, setClaimed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 3000);
  };

  return (
    <div className='container-fluid px-3 px-lg-0 px-md-0'>
      {/* Home Navigation */}
      <p className='pt-3 px-4'>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <i className="bi bi-house-door-fill"></i> Home
        </span>
        <span className='text-muted'>&nbsp;&gt;&nbsp;Offers</span>
      </p>
      
      <div className="container my-5 px-lg-2 p-md-2 px-3">
      
      {/* Hero Section */}
      <div className="rounded-4 shadow p-lg-5 p-md-5 p-3 text-center mb-5 animate__animated animate__fadeIn animate__slow hover-zoom" style={{backgroundColor:'rgb(250, 250, 173)'}}>
        <h1 className="fw-bold display-5 text-dark">🎉 Elora Deal Fest</h1>
        <p className="lead text-dark mt-2">Celebrate shopping with our boldest discounts!</p>
        <span className="badge bg-dark text-warning fs-6 px-3 py-2">🔥 Trending Now</span>
        <div className="mt-3">
          <button className="btn btn-outline-dark px-4 mt-3 offers-btn" onClick={() => navigate('/shop')}>
            Start Shopping
          </button>
        </div>
      </div>

      {/* Offer Cards */}
      <div className="row gy-4">
        {/* Flash Deal */}
        <div className="col-md-6 hover-zoom">
          <div className="d-flex p-4 border rounded-3 shadow-sm align-items-center gap-4 animate__animated animate__slideInLeft animate__slow" style={{backgroundColor:'rgb(247, 217, 187)'}}>
            <i className="bi bi-clock-history fs-1 text-danger"></i>
            <div>
              <h5 className="fw-bold mb-1">⏰ Flash Deal</h5>
              <p className="mb-0 text-muted">Ends in {formatTime(timer)}</p>
              <span className="badge bg-danger-subtle text-danger mt-2">Limited Time</span>
            </div>
          </div>
        </div>

        {/* Brand Bonanza */}
        <div className="col-md-6 hover-zoom">
          <div className="d-flex p-4 border rounded-3 shadow-sm align-items-center gap-4 animate__animated animate__slideInRight animate__slow" style={{backgroundColor:'rgb(199, 210, 245)'}}>
            <i className="bi bi-tags-fill fs-1 text-primary"></i>
            <div>
              <h5 className="fw-bold mb-1">💥 Brand Bonanza</h5>
              <p className="mb-0 text-muted">Up to 60% off top brands — limited time only.</p>
              <span className="badge bg-primary-subtle text-primary mt-2">Top Brands</span>
            </div>
          </div>
        </div>

        {/* Combo Offers */}
        <div className="col-md-6 hover-zoom">
          <div className="d-flex p-4 border rounded-3 shadow-sm align-items-center gap-4 animate__animated animate__slideInLeft animate__slow " style={{backgroundColor:'rgb(179, 242, 217)'}}>
            <i className="bi bi-box-seam fs-1 text-success"></i>
            <div>
              <h5 className="fw-bold mb-1">🎁 Combo Offers</h5>
              <p className="mb-0 text-muted">Save more with bundled essentials and combos.</p>
              <span className="badge bg-success-subtle text-success mt-2">Hot Deal</span>
            </div>
          </div>
        </div>

        {/* Final Clearance */}
        <div className="col-md-6 hover-zoom">
          <div className="d-flex p-4 border rounded-3 shadow-sm align-items-center gap-4 animate__animated animate__slideInRight animate__slow " style={{backgroundColor:'rgb(192, 192, 161)'}}>
            <i className="bi bi-bag-x-fill fs-1 text-secondary"></i>
            <div>
              <h5 className="fw-bold mb-1">🛍️ Final Clearance</h5>
              <p className="mb-0 text-muted">Up to 80% off on end-of-season clearance items.</p>
              <span className="badge bg-secondary-subtle text-secondary mt-2">Last Chance</span>
            </div>
          </div>
        </div>

        {/* Buy 1 Get 1 Offer */}
        <div className="col-md-12 hover-zoom">
          <div className="d-flex flex-column flex-md-row p-4 border rounded-3 shadow-sm align-items-start align-items-md-center justify-content-between gap-4 mt-3 animate__animated animate__fadeIn animate__slow " style={{backgroundColor:'rgb(247, 247, 177)'}}>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-gift-fill fs-1 text-warning"></i>
              <div>
                <h5 className="fw-bold mb-1">🎉 Buy 1 Get 1 Free</h5>
                <p className="mb-1 text-muted">Enjoy double the delight on select styles!</p>
                <span className="badge bg-warning-subtle text-warning">BOGO Offer</span>
              </div>
            </div>
            <div>
              <button
                className="btn btn-warning px-4 fw-semibold"
                onClick={handleClaim}
                disabled={claimed}
              >
                {claimed ? "🎊 Offer Claimed!" : "Claim Offer"}
              </button>
              {claimed && (
                <div className="text-success fw-medium mt-2">
                  🎁 Added to your rewards!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
