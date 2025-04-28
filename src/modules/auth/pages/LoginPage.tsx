import { Box } from "@mui/material";
import LoginBranding from "./LoginBranding"; // Ajusta la ruta según tu estructura
import LoginForm from "./LoginForm";         // Ajusta la ruta según tu estructura

export default function LoginPage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <LoginBranding />
      <LoginForm />
    </Box>
  );
}
