import { Box, Button, Link, Typography } from "@mui/material";
import { useLoginForm } from "../hooks/useLoginForm";
import { EmailField } from "../../../components/formFields/EmailField";
import { PasswordField } from "../../../components/formFields/PasswordField";


export default function LoginForm() {

    const {
        email,
        password,
        emailError,
        passwordError,
        showPassword,
        setEmail,
        setPassword,
        handleSubmit,
        togglePasswordVisibility,
      } = useLoginForm();  

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#334155' }}>
        Iniciar sesión
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '100%', maxWidth: 400 }}
      >
        <EmailField
          value={email}
          error={emailError.error}
          helperText={emailError.message}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          value={password}
          error={passwordError.error}
          helperText={passwordError.message}
          showPassword={showPassword}
          onChange={(e) => setPassword(e.target.value)}
          onToggleVisibility={togglePasswordVisibility}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: '#0ea5e9', '&:hover': { backgroundColor: '#0284c7' } }}
        >
          Ingresar
        </Button>
        <Link href="#" underline="hover" sx={{ display: 'block', textAlign: 'center', mt: 2 }}>
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>
    </Box>
  );
}
