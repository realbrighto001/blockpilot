import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="login-container">
      {/* Close/X button */}
      <button className="close-btn" onClick={() => navigate("/")}>×</button>

      <h1>Log In</h1>

      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="login-btn">Log In</button>
      </form>

      {/* Social Sign-In */}
      <div className="social-login">
        <p>Or login with:</p>
        <div className="social-buttons">
          <button className="social-btn google">Google</button>
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn twitter">Twitter</button>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="signup-text">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
