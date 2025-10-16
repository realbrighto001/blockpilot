import React, { useState } from "react";
import "./Pricing.css";
import { Link } from 'react-router-dom'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan</h1>

      {/* Billing Toggle */}
      <div className="billing-toggle">
        <span className={!isYearly ? "active" : ""}>Monthly</span>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={toggleBilling} />
          <span className="slider"></span>
        </label>
        <span className={isYearly ? "active" : ""}>Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card">
          <h2>Free</h2>
          <p className="price">$0<span>/mo</span></p>
          <ul className="features">
            <li>Live crypto prices</li>
            <li>Basic charts</li>
            <li>Watchlist (max 5 coins)</li>
            <li>Ads included</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card pro">
          <h2>Pro</h2>
          <p className="price">
            {isYearly ? "$99" : "$10"}
            <span>{isYearly ? "/yr" : "/mo"}</span>
          </p>
          <ul className="features">
            <li>Advanced charts</li>
            <li>Unlimited watchlist</li>
            <li>Price alerts</li>
            <li>Portfolio tracking</li>
            <li>Ad-free experience</li>
            <li>API access</li>
            <li>Priority support</li>
          </ul>
          <button className="btn pro-btn">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
