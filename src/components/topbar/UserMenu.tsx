import {
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Switch,
    Typography
  } from "@mui/material";
  import {
    Accessibility,
    Settings,
    HelpOutline,
    Logout,
    DarkMode,
    AccountCircle
  } from "@mui/icons-material";
  import { useState } from "react";
  
  export default function UserMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <IconButton onClick={handleOpen} sx={{ p: 0 }}>
          <Avatar src="/mock-avatar.jpg" alt="User" />
        </IconButton>
  
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 3,
            sx: {
              mt: 1,
              minWidth: 230,
              borderRadius: 2,
              overflow: "hidden",
              p: 0
            }
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src="/mock-avatar.jpg" />
            <Box>
              <Typography fontWeight="bold" fontSize={14}>Guest</Typography>
              <Typography color="#f97316" fontSize={13}>Merchant Captian 💎</Typography>
            </Box>
          </Box>
  
          <Divider />
  
          <MenuItem>
            <ListItemIcon>
              <Accessibility fontSize="small" />
            </ListItemIcon>
            <ListItemText>Accessibility</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <ListItemText>Preferences</ListItemText>
          </MenuItem>
          <MenuItem disableRipple sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <DarkMode fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dark mode</ListItemText>
            </Box>
            <Switch size="small" />
          </MenuItem>
  
          <Divider />
  
          <MenuItem>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            <ListItemText>Account Settings</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HelpOutline fontSize="small" />
            </ListItemIcon>
            <ListItemText>Help Center</ListItemText>
          </MenuItem>
  
          <Divider />
  
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sign In</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  }
  