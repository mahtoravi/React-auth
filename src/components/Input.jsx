import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

function Input({ id, label, placeholder, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const contactValiDation = {
    length: (value) =>
      value.length === 10 || "Contact number must be exactly 10 digits ",
  };
  const zipcodeValidation = {
    length: (value) => value.length === 6 || "zipcode must be 6 digit",
  };
  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      error={!!errors[id]} // Set error state if there's an error
      helperText={errors[id] ? errors[id].message : ""}
      {...register(id, {
        required: `${label} is required`, // Custom error message for required field
        pattern: id === "email" && {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Please enter a valid email address", // Custom error message for invalid email format
        },
        validate:
          (id === "contact" && contactValiDation) ||
          (id === "zipcode" && zipcodeValidation),
      })}
      {...props}
      InputProps={{
        sx: {
          input: {
            padding: "12.5px 12.5px",
          },
        },
      }}
    />
  );
}

export default Input;
