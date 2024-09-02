import React from "react";

import arrowImage from "../../static/images/arrow.png";
import { CustomButton } from "../../components/CustomButton.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Avatar, Stack, Box, Card } from "@mui/material";
import PasswordInput from "../../components/PasswordInput.jsx";
import { useForm, FormProvider } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdataPassward() {
  const EXISTING_USERS = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();
  const methods = useForm();

  const alert = () => {
    toast.success("password changed sucessfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const location = useLocation();
  const userMail = location.state;

  const onSubmit = (data) => {
    if (data.password === data.confirm_password) {
      console.log(data);
      const validateUser = EXISTING_USERS.map((user) => {
        if (user.email === userMail) {
          return { ...user, password: data.password };
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify([...validateUser]));
      methods.reset();
      alert();

      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
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
                src={arrowImage}
                sx={{ width: 65, height: 65 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Request sent Successfully!
              </Typography>
              <PasswordInput
                sx={{ width: "100%" }}
                label="password"
                id="password"
                idenetity="update-password"
              />
              <PasswordInput
                sx={{ width: "100%" }}
                label="Confirm Password"
                id="confirm_password"
                idenetity="update-password"
              />

              <CustomButton sx={{ width: "100%" }} type="submit">
                UpdatePassward
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

export default UpdataPassward;
