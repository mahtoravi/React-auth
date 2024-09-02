import React from "react";
import MainAuthRapper from "../../components/MainAuthRapper";
import Input from "../../components/Input.jsx";
import PassWordInpput from "../../components/PasswordInput.jsx";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const EXISTING_USERS = JSON.parse(localStorage.getItem("users")) || [];
  const methods = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const { confirm_password, ...requiredData } = data;
    const usersData = [...EXISTING_USERS, requiredData];
    localStorage.setItem("users", JSON.stringify(usersData));
    methods.reset();
    navigate("/auth/login");
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MainAuthRapper cardWidth={1000} idenetity="signup">
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={1}>
              <Grid xs={6}>
                <Input
                  fullWidth
                  id="first-name"
                  label="First name"
                  placeholder="First name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  id="last-name"
                  label="Last name"
                  placeholder="Last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  fullWidth
                  id="email"
                  label="Email adrress"
                  placeholder="Email adrress"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  fullWidth
                  id="contact"
                  label="Contact"
                  variant="outlined"
                  placeholder="Contact"
                />
              </Grid>
              <Grid xs={6}>
                <PassWordInpput
                  fullWidth
                  label="password"
                  id="password"
                  idenetity="signup"
                />
              </Grid>
              <Grid xs={6}>
                <PassWordInpput
                  fullWidth
                  label="Confirm password"
                  id="confirm_password"
                />
              </Grid>
              <Grid xs={12}>
                <Input
                  fullWidth
                  id="website"
                  label="Website"
                  variant="outlined"
                  placeholder="Website"
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  fullWidth
                  id="adress"
                  label="Address"
                  variant="outlined"
                  placeholder="Address"
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  fullWidth
                  id="zipcode"
                  label="Zipcode"
                  variant="outlined"
                  placeholder="Zipcode"
                  type="number"
                />
              </Grid>
              <Grid xs={12}>
                <Input
                  fullWidth
                  id="Country"
                  label="Country"
                  variant="outlined"
                  placeholder="Country"
                />
              </Grid>
            </Grid>
          </Box>
        </MainAuthRapper>
      </form>
    </FormProvider>
  );
}

export default Signup;
