import React from "react";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";

function PasswordInput({ id, label, idenetity, validate, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const password = watch("password");
  return (
    <TextField
      {...props}
      error={!!errors[id]} // Set error state if there's an error
      helperText={errors[id] ? errors[id].message : ""}
      {...register(id, {
        required: `${label} is required`, // Custom error message
        validate:
          id === "confirm_password"
            ? (value) => value === password || "Passwords do not match"
            : undefined,
        pattern: idenetity === "signup" && {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: "Password enter strong password",
        },
      })}
      id={id}
      label={label}
      placeholder="6+ charatcers"
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      InputProps={{
        sx: {
          input: {
            padding: "12.5px 14px",
          },
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
export default PasswordInput;
