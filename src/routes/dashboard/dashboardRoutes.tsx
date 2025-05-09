import { Route } from "react-router-dom"
import DashboardHome from "../../modules/dashboard/pages/DashboardHome"
import MainLayout from "../../layouts/MainLayout"

export const dashboardRoutes = [
    <Route element={<MainLayout />} key="main-layout">
    <Route path="/dashboard" element={<DashboardHome />} key="dashboard-home" />
  </Route>,
]
