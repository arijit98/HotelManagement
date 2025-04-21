import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";

const validateToken = (token) => {
  try {
    // Decode the token
    const decoded = jwtDecode(token);

    // Check expiration
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    if (decoded.exp < currentTime) {
      console.log("Token has expired");
      return false;
    }

    // Check role (optional, based on your logic)
    if (decoded.role !== "ADMIN" && decoded.role !== "STAFF") {
      console.log("Invalid role");
      return false;
    }

    console.log("Token is valid", decoded);
    return true;
  } catch (error) {
    console.error("Invalid token:", error.message);
    return false;
  }
};

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");
  const isValid = validateToken(token);


  if (!isValid) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
