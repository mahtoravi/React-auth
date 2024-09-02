import React from "react";
import deleteUser from "../../static/images/delete-user.png";
import Input from "../../components/Input.jsx";
import { CustomButton } from "../../components/CustomButton.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Avatar, Stack, Box, Card } from "@mui/material";
import PasswordInput from "../../components/PasswordInput.jsx";
import { useForm, FormProvider } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteUser() {
  const methods = useForm();
  const EXISTING_USERS = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const alert = () => {
    toast.warn("your account deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const inavalid = () => {
    toast.error("Invalid user details!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    const validateUser = EXISTING_USERS.filter(
      (user) => !(user.email === data.email && user.password === data.password)
    );
    console.log("validateUser: ", validateUser);
    if (validateUser.length !== EXISTING_USERS.length) {
      localStorage.setItem("users", JSON.stringify([...validateUser]));
      methods.reset();
      alert();
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } else {
      inavalid();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ToastContainer />
        <Box
          sx={{
            height: "100vh",
            m: "auto",
            width: {
              sm: "auto",
              md: 400,
            },
            alignContent: "center",
          }}
        >
          <Card sx={{ padding: "20px", boxShadow: 3 }}>
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
                src={deleteUser}
                sx={{ width: 65, height: 65, borderRadius: "22%" }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Delete your account
              </Typography>
              <Stack>
                <Typography sx={{ color: "gray" }} textAlign="center">
                  Provide user Authentication details
                </Typography>
              </Stack>
              <Input
                sx={{ width: "100%" }}
                id="email"
                label="Email address"
                placeholder="Example@gmail.com"
              ></Input>
              <PasswordInput
                sx={{ width: "100%" }}
                label="password"
                id="password"
              />
              <CustomButton sx={{ width: "100%" }} type="submit">
                Delete Profile
              </CustomButton>
              <Link to=".." path="relative" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "gray" }}>
                  {" "}
                  {"< "}Return to Sign in
                </Typography>
              </Link>
            </Stack>
          </Card>
        </Box>
      </form>
    </FormProvider>
  );
}

export default DeleteUser;
