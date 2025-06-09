import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to your account</p>

        <form className="login-form">
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Passcode" />

          <a href="#" className="trouble-link">Having trouble signing in?</a>

          <button className="login-button">Sign In</button>

          <div className="divider">or sign in with</div>

          <div className="social-buttons">
            <button className="social google">Google</button>
            <button className="social apple">Apple ID</button>
            <button className="social facebook">Facebook</button>
          </div>

          <p className="signup-link">
            Don’t have an account? <a href="#">Request Now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
