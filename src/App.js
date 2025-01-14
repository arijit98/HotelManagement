// Code to render the main App component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import StaffDashboard from './pages/StaffDashboard';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Login from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId='619514190949-3eibfqquiru247v9s69513ohj0naonul.apps.googleusercontent.com'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
