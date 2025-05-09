import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import {
    Home as HomeIcon,
    Pets as PetsIcon,
    Settings as SettingsIcon,
    BarChart as ReportIcon,
    KeyboardDoubleArrowLeft as CollapseIcon,
    KeyboardDoubleArrowRight as ExpandIcon,
    PersonAdd,
    EventAvailable,
  } from "@mui/icons-material";
  import { useNavigate, useLocation } from "react-router-dom";
  import { useState } from "react";
  import LogoPetNova from "../../assets/logo/Logo_Principal_PETNOVA.png";
  
  const drawerWidth = 200;
  const collapsedWidth = 100;
  
  export default function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleToggleDrawer = () => setMobileOpen(!mobileOpen);
    const handleCollapse = () => setCollapsed(!collapsed);
  
    const sections = [
      {
        title: "HOMEPAGE",
        items: [{ label: "Inicio", icon: <HomeIcon />, path: "/dashboard" }],
      },
      {
        title: "APPS",
        items: [
          { label: "Pacientes", icon: <PetsIcon />, path: "/dashboard/pets" },
          { label: "Citas", icon: <EventAvailable />, path: "/dashboard/appointments" },
          { label: "Usuarios", icon: <PersonAdd />, path: "/users" },
        ],
      },
      {
        title: "PAGES",
        items: [
          { label: "Reportes", icon: <ReportIcon />, path: "/dashboard/reports" },
          { label: "Configuración", icon: <SettingsIcon />, path: "/dashboard/settings" },
        ],
      },
    ];
  
    const drawerContent = (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          px: 1,
          pt: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <img
            src={collapsed ? LogoPetNova : LogoPetNova}
            alt="PetNova"
            width={collapsed ? 80 : 120}
          />
        </Box>
  
        {/* Menu */}
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {sections.map((section, i) => (
            <Box key={i}>
              {!collapsed && (
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#94a3b8",
                    pl: 2,
                    mt: 2,
                    mb: 0.5,
                  }}
                >
                  {section.title}
                </Typography>
              )}
              <List disablePadding>
                {section.items.map((item, index) => {
                  const isActive = location.pathname.startsWith(item.path);
                  return (
                    <Tooltip
                      key={index}
                      title={collapsed ? item.label : ""}
                      placement="right"
                      arrow
                    >
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => navigate(item.path)}
                          selected={isActive}
                          sx={{
                            py: 1,
                            px: 2,
                            borderRadius: 2,
                            backgroundColor: isActive ? "#e0f2fe" : "transparent",
                            color: isActive ? "#0284c7" : "#1e293b",
                            ":hover": { backgroundColor: "#f1f5f9" },
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            ...(collapsed
                              ? {
                                  gap: 0.5,
                                }
                              : {
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  textAlign: "left",
                                  gap: 1.25,
                                }),
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              color: isActive ? "#0284c7" : "inherit",
                              justifyContent: "center",
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                        
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: collapsed ? 13 : 14,
                              fontWeight: 400,
                              lineHeight: 1.25,
                            }}
                            sx={{
                              mt: collapsed ? 0.5 : 0,
                              ml: collapsed ? 0 : 1,
                              display: "block",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Tooltip>
                  );
                })}
              </List>
            </Box>
          ))}
        </Box>
  
        {/* Collapse toggle */}
        <Box>
        <Divider sx={{ mb: 1 }} />
        <ListItem disablePadding>
            <ListItemButton
            onClick={handleCollapse}
            sx={{
                borderRadius: 2,
                justifyContent: "center",
                px: 2,
                py: 1,
                width: "100%",
            }}
            >
            <ListItemIcon
                sx={{
                minWidth: 0,
                justifyContent: "center",
                color: "#475569",
                }}
            >
                {collapsed ? <ExpandIcon /> : <CollapseIcon />}
            </ListItemIcon>
            {!collapsed && (
                <ListItemText
                primary="Colapsar"
                primaryTypographyProps={{ fontSize: 14 }}
                sx={{ ml: 1 }}
                />
            )}
            </ListItemButton>
        </ListItem>
        </Box>
      </Box>
    );
  
    return isMobile ? (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleToggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
      >
        {drawerContent}
      </Drawer>
    ) : (
      <Drawer
        variant="permanent"
        open
        sx={{
          width: collapsed ? collapsedWidth : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsed ? collapsedWidth : drawerWidth,
            transition: "width 0.3s",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }
  