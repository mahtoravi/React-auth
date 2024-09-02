import React, { useState } from "react";
import MainAuthRapper from "../../components/MainAuthRapper.jsx";
import { Stack, Alert } from "@mui/material";
import Input from "../../components/Input.jsx";
import PasswordInput from "../../components/PasswordInput.jsx";
import CustomModal from "../../components/CustomModal.jsx";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const EXISTING_USERS = JSON.parse(localStorage.getItem("users"));
  const [invalid, setInvalid] = useState(false);
  const [userMail, setUserMail] = useState("");

  const methods = useForm();

  const naviagte = useNavigate();
  const onSubmit = (data) => {
    setUserMail(data.email);
    const validateUser = EXISTING_USERS.filter(
      (user) => user.email === data.email && user.password === data.password
    );
    if (validateUser.length !== 0) {
      naviagte("/main");
    } else {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, "2000");
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {invalid && (
          <Alert variant="outlined" severity="error" onClose={() => {}}>
            invalid user!
          </Alert>
        )}
        <MainAuthRapper cardWidth={400} idenetity="signin">
          <Stack sx={{ paddingInline: "20px", gap: "10px" }}>
            <Input
              id="email"
              label="Email address"
              placeholder="Example@gmail.com"
              onChange={(event) => setUserMail(event.target.value)}
            />
            <Stack sx={{ alignItems: "end", paddingTop: "10px" }}>
              <CustomModal email={userMail}> Forgot password?</CustomModal>
            </Stack>
            <PasswordInput label="password" id="password" idenetity="signin" />
          </Stack>
        </MainAuthRapper>
      </form>
    </FormProvider>
  );
}

export default Login;
