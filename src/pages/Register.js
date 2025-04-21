import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const requestBody = { name, address, contactNumber, logoUrl };
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`; // Set token for axios
      const response = await axios.post('/api/v1/restaurants/register', requestBody);

      if (response.status === 201) {
        console.log('Restaurant registered successfully:', response.data);
        navigate('/admin'); // Redirect to dashboard or another page after successful registration
      }
    } catch (error) {
      console.error('Registration failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h2>Register Restaurant</h2>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Logo URL"
        value={logoUrl}
        onChange={(e) => setLogoUrl(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;