import { Box, Typography } from "@mui/material";
import UserTable from "../components/UserTable";

export default function UserPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestión de Usuarios
      </Typography>
      <Typography variant="body1">
        Aquí podrás visualizar, agregar, editar o eliminar usuarios del sistema PetNova.
      </Typography>
      <UserTable/>
    </Box>
  );
}
