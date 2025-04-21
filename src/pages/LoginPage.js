import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './LoginPage.css';

axios.defaults.baseURL = 'http://localhost:8080';


const LoginPage = () => {
    const [user, setUser] = useState(null);

    // Google Sign-In Integration
    // useEffect(() => {
    //   /* global google */
    //   window.google.accounts.id.initialize({
    //     client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Client ID
    //     callback: handleGoogleSignIn,
    //   });
  
    //   window.google.accounts.id.renderButton(
    //     document.getElementById('google-signin-btn'),
    //     {
    //       theme: 'outline',
    //       size: 'large',
    //     }
    //   );
    // }, []);
  
    const handleGoogleSignIn = (response) => {
    //   const token = response.credential;
  
    //   // Optionally, send the token to your back-end to verify and create a session
    //   axios.post('/api/auth/google', { token }).then((res) => {
    //     setUser(res.data.user);
    //   });
  
      console.log('Google User Signed In');
    };
  
    // Handle form submit
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
  
      axios.post('/api/auth/signup', data)
        .then((res) => {
          console.log('User signed up:', res.data);
        })
        .catch((err) => {
          console.error('Error signing up:', err);
        });
    };
  
    return (
      <div className="signup-container">
        <h1>Get Started</h1>
        <p>SIGN UP USING</p>
        <div id="google-signin-btn"></div>
  
        <form onSubmit={handleFormSubmit} className="signup-form">
          <label htmlFor="full-name">Full Name*</label>
          <input type="text" id="full-name" name="fullName" placeholder="Enter your name" required />
  
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" placeholder="example@domain.com" required />
  
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
  
          {/* <div className="terms">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div> */}
  
          <button type="submit" className="signup-button">Sign Up and Continue</button>
        </form>
      </div>
    );
  };
  
export default LoginPage;