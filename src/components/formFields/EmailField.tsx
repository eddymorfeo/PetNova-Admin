import { TextField } from "@mui/material";

interface EmailFieldProps {
  label?: string;
  value: string;
  error?: boolean;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmailField({
  label = "Correo electrónico",
  value,
  error = false,
  helperText = "",
  onChange,
}: EmailFieldProps) {
  return (
    <TextField
      id="email"
      label={label}
      type="email"
      variant="outlined"
      fullWidth
      margin="normal"
      required
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
    />
  );
}
