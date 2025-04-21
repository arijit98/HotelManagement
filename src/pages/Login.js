import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google'; // Install `@react-oauth/google`
import {jwtDecode} from 'jwt-decode'; 

axios.defaults.baseURL = 'http://localhost:8080';

function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/v1/auth/login', { username, password });
      const token = response.data;
      localStorage.setItem('token', token);
      console.log('Login successful:', response.data);
  
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role; // Extract the 'role' claim
      console.log('Decoded role:', role);
    
      // Set token for axios
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      // Check if user is linked to a restaurant
      const restaurantResponse = await axios.get('/api/v1/restaurants/my');
      if (restaurantResponse.status === 200) {
        const restaurant = restaurantResponse.data;
        localStorage.setItem('restaurantId', restaurant.id); // Store restaurant ID in local storage
        navigate(role.toLowerCase() === 'admin' ? '/admin' : '/staff');
      } else {
        // No restaurant linked
        navigate('/register-restaurant');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
    }
  };
  

  const handleGoogleSuccess = async (response) => {
    try {
      console.log('Google login success:', response);
      const result = await axios.post('/api/v1/auth/google-login', { token: response.credential });
      localStorage.setItem('token', result.data.token);
      console.log('Google login result:', result.data);
      navigate(result.data.role === 'admin' ? '/admin' : '/staff');
    } catch (error) {
      console.error('Google login failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.error('Google login failed')} />
    </div>
  );
}

export default Login;
