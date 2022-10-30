import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>Error404</h1>} />
    </Routes>
  );
}
