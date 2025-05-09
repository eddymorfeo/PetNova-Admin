import { Routes, Route, Navigate } from "react-router-dom"
import { authRoutes } from "./auth/authRoutes"
import { dashboardRoutes } from "./dashboard/dashboardRoutes"
import { administrationRoutes } from "./administration/administrationRoutes"

export default function AppRouter() {
    return (
      <Routes>
        {authRoutes}
        {dashboardRoutes}
        {administrationRoutes}
        
        {/* Define una ruta catch-all. Si ninguna ruta coincide, redirige a /login. 
        La propiedad replace hace que la navegación no se agregue al historial del navegador (ideal para redirecciones forzadas). */}
        <Route path="*" element={<Navigate to="/login" replace />} /> 
      </Routes>
    )
  }