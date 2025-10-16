import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up Data:", formData);
    alert("Sign Up Successful!");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="signup-container">
      {/* Close/X button */}
      <button className="close-btn" onClick={() => navigate("/")}>×</button>

      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      {/* Social Sign-In */}
      <div className="social-login">
        <p>Or sign up with:</p>
        <div className="social-buttons">
          <button className="social-btn google">Google</button>
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn twitter">Twitter</button>
        </div>
      </div>

      {/* Login Link */}
      <p className="login-text">
        Already have an account? <Link to="/login" className="login-btn">Log In</Link>

      </p>
    </div>
  );
};

export default SignUp;
