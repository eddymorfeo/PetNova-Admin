import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    InputBase,
    Toolbar,
    Tooltip,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import {
    Search as SearchIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    NotificationsNone,
  } from "@mui/icons-material";
  import { useState } from "react";
import UserMenu from "./UserMenu";
  
  export default function Topbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleTheme = () => setDarkMode(!darkMode);
  
    return (
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #e2e8f0",
          color: "inherit",
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Search */}
          <Box
            sx={{
              backgroundColor: "#f1f5f9",
              px: 2,
              py: 0.5,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              width: isMobile ? "100%" : 300,
            }}
          >
            <SearchIcon fontSize="small" sx={{ mr: 1, color: "#64748b" }} />
            <InputBase placeholder="Buscar" sx={{ fontSize: 14 }} />
          </Box>
  
          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Language */}
            <Box
              component="img"
              src="https://flagcdn.com/w40/gb.png"
              alt="Idioma"
              sx={{ width: 24, height: 24, borderRadius: "50%" }}
            />
  
            {/* Theme Toggle */}
            <Tooltip title="Cambiar tema">
              <IconButton
                onClick={toggleTheme}
                sx={{ bgcolor: "#f1f5f9", width: 36, height: 36 }}
              >
                {darkMode ? (
                  <DarkModeIcon fontSize="small" />
                ) : (
                  <LightModeIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
  
            {/* Notifications */}
            <Tooltip title="Notificaciones">
              <IconButton sx={{ bgcolor: "#f1f5f9", width: 36, height: 36 }}>
                <NotificationsNone fontSize="small" />
              </IconButton>
            </Tooltip>
  
            {/* User Avatar */}
            <Tooltip title="Mi perfil">
              <UserMenu/>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  