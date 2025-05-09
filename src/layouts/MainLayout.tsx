import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <Box sx={{ flex: 1, p: 2, overflowY: "auto", backgroundColor: "#f8fafc" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
