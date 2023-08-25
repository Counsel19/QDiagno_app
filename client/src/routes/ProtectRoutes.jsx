import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectRoute = ({ children }) => {
  const { user } = useAppContext();
  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectRoute;
