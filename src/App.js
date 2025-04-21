// Code to render the main App component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import StaffDashboard from './pages/StaffDashboard';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/register-restaurant" element={<Register />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
