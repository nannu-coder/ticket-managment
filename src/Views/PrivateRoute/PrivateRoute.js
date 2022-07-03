import { CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAuthentication from "../../Hooks/UseAuthentication";

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedIn, isLoading } = UseAuthentication();
  const location = useLocation();

  useEffect(()=>{},[loggedIn])

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!loggedIn) {
    return <Navigate replace to="/signin" state={{ from: location }} />;
  } else {
    return children;
  };

  

};

export default PrivateRoute;
