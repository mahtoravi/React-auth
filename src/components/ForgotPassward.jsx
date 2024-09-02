import React, { useState } from "react";

import forgotImage from "../static/images/lock.png";
import Input from "./Input.jsx";
import { CustomButton } from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Avatar, Stack } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
function ForgotPassward({ email }) {
  const EXISTING_USERS = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const methods = useForm();
  const onSubmit = (data) => {
    const validateUser = EXISTING_USERS.filter(
      (user) => user.email === data.email
    );

    if (validateUser.length === 0) {
      setIsUser(true);
    } else {
      navigate("/auth/update_password", { state: data.email });
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={forgotImage}
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Forgot your Password?
          </Typography>
          <Stack>
            <Typography sx={{ color: "gray" }} textAlign="center">
              Please enter the email associated with tour
            </Typography>
            <Typography sx={{ color: "gray" }}>
              account and we'll email you link to reset your password
            </Typography>
          </Stack>
          <Input
            sx={{ width: "100%" }}
            id="email"
            label="Email address"
            placeholder="Example@gmail.com"
            defaultValue={email}
            error={isUser}
            helperText={isUser && "invalid mail"}
          ></Input>
          <CustomButton sx={{ width: "100%" }} type="submit">
            Send request
          </CustomButton>
          <Link to=".." path="relative" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "gray" }}>
              {" "}
              {"< "}Return to Sign in
            </Typography>
          </Link>
        </Stack>
      </form>
    </FormProvider>
  );
}

export default ForgotPassward;
