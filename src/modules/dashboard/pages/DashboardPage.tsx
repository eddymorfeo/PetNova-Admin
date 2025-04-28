import { Button, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Panel de administración
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Bienvenido al sistema de gestión de PetNova.
      </Typography>
      <Button variant="outlined" onClick={() => navigate("/login")}>
        Volver
      </Button>
    </Container>
  )
}
