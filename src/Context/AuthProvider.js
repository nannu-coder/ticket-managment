import React from "react";
import { createContext } from "react";
import UseAuthentication from "../Hooks/UseAuthentication";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allValue = UseAuthentication();
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
