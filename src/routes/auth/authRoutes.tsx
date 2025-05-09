import { Route } from "react-router-dom"
import LoginPage from "../../modules/auth/pages/LoginPage"

export const authRoutes = [
  <Route path="/" element={<LoginPage />} key="root" />,
  <Route path="/login" element={<LoginPage />} key="login" />,
]
