import React, { createContext, useState, useEffect } from "react";
import { login as apiLogin, logout as apiLogout } from "../api/auth";
import api from "../api/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, load token from storage
  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      setToken(stored);
      api.defaults.headers.common["Authorization"] = `Bearer ${stored}`;
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const newToken = await apiLogin(credentials);
    setToken(newToken);
  };

  const logout = () => {
    apiLogout();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
