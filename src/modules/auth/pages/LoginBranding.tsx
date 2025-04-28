import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoPrincipal from "../../../assets/logo/Logo_Principal_PETNOVA.png";

export default function LoginBranding() {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: '#e0f2fe',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Box
        component="img"
        src={LogoPrincipal}
        alt="Logo Petnova"
        sx={{
          width: 200,
          height: 200,
          marginBottom: '2rem',
        }}
      />
      <Typography variant="h4" sx={{ mb: 2, color: '#334155', fontWeight: 'bold', textAlign: 'center' }}>
        Bienvenido a PETNOVA
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: '#334155', textAlign: 'center' }}>
        Gestiona tu clínica veterinaria de manera fácil, rápida y segura.
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <PetsIcon sx={{ color: '#10b981' }} />
          </ListItemIcon>
          <ListItemText primary="Accede a la ficha completa de cada paciente en segundos." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CalendarTodayIcon sx={{ color: '#10b981' }} />
          </ListItemIcon>
          <ListItemText primary="Lleva el control de turnos, tratamientos y pagos." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#10b981' }} />
          </ListItemIcon>
          <ListItemText primary="Optimiza tu trabajo con herramientas diseñadas para veterinarios." />
        </ListItem>
      </List>
    </Box>
  );
}
