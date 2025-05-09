import { Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import UserPage from "../../modules/administration/pages/UserPage";

export const administrationRoutes = [
  <Route element={<MainLayout />} key="admin-layout">
    <Route path="/users" element={<UserPage />} key="users-list" />
  </Route>,
];
