import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "../modules/auth/pages/LoginPage"
import DashboardPage from "../modules/dashboard/pages/DashboardPage"

export default function AppRouter() {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }