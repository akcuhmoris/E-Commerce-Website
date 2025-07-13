// src/api/auth.js
import api from "./api";

export function register(user) {
    return api.post("/api/auth/register", user);
}

export async function login(credentials) {
    const res = await api.post("/api/auth/login", credentials);
    const { token } = res.data;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
}

export function logout() {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
}