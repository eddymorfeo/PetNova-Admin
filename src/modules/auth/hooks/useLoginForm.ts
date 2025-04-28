import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../../utils/validation";

interface FieldError {
  error: boolean;
  message: string;
}

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState<FieldError>({ error: false, message: "" });
  const [passwordError, setPasswordError] = useState<FieldError>({ error: false, message: "" });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError({
        error: true,
        message: "El correo electrónico no es válido",
      });
      valid = false;
    } else {
      setEmailError({ error: false, message: "" });
    }

    if (!validatePassword(password)) {
      setPasswordError({
        error: true,
        message: "La contraseña debe tener mínimo 8 caracteres, al menos una letra y un número",
      });
      valid = false;
    } else {
      setPasswordError({ error: false, message: "" });
    }

    if (valid) {
      navigate("/dashboard");
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    showPassword,
    setEmail,
    setPassword,
    handleSubmit,
    togglePasswordVisibility,
  };
};
