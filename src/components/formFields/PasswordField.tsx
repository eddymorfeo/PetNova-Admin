import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordFieldProps {
  label?: string;
  value: string;
  error?: boolean;
  helperText?: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleVisibility: () => void;
}

export function PasswordField({
  label = "Contraseña",
  value,
  error = false,
  helperText = "",
  showPassword,
  onChange,
  onToggleVisibility,
}: PasswordFieldProps) {
  return (
    <TextField
      id="password"
      label={label}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      fullWidth
      margin="normal"
      required
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onToggleVisibility}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
