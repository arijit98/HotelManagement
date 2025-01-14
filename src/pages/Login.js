import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google'; // Install `@react-oauth/google`

axios.defaults.baseURL = 'http://localhost:8080';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/v1/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate(response.data.role === 'admin' ? '/admin' : '/staff');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
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
