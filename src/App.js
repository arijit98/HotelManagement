import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import StaffDashboard from './pages/StaffDashboard';
import AdminPage from './pages/AdminPage';

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
