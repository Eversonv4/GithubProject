import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "pages/dashboard";
import { Login } from "pages/login";
import { RepositoriesPage } from "pages/repositories";
import { FollowingPage } from "pages/following";
import { FollowersPage } from "pages/followers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seguidores" element={<FollowersPage />} />
      <Route path="/seguindo" element={<FollowingPage />} />
      <Route path="/repositorios" element={<RepositoriesPage />} />
      <Route path="*" element={<h1>Error404</h1>} />
    </Routes>
  );
}
