import * as React from "react";
import { Box, Avatar } from "@mui/material";
import image from "../static/images/signin.png";
import { CustomButton } from "./CustomButton.jsx";
import { Card, Stack, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
function MainAuthRapper({ children, cardWidth, idenetity }) {
  return (
    <Box
      sx={{
        height: "100vh",
        m: "auto",
        width: {
          sm: "auto",
          md: cardWidth,
        },
        alignContent: "center",
      }}
    >
      <Card sx={{ paddingBlock: "20px", boxShadow: 3 }}>
        <Stack
          padding={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
        </Stack>
        <Typography sx={{ fontWeight: "700" }} variant="h6">
          {idenetity === "signin"
            ? "Sign in to your account"
            : "Get started absolutely free"}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingBlock: "5px 25px", gap: "4px" }}
        >
          <Typography sx={{ color: "#757575" }}>
            {idenetity === "signin"
              ? "Don't have and account?"
              : "Already have an account?"}
          </Typography>
          <NavLink
            to={idenetity === "signin" ? "/auth/signup" : "/auth/login"}
            style={({ isActive }) => ({
              color: "green",
              textDecoration: "none",
            })}
          >
            {idenetity === "signin" ? "Get Started" : "signin"}
          </NavLink>
        </Stack>

        {/* dynamic  auth*/}
        {children}
        {/* dynamic auth */}

        <Stack sx={{ paddingInline: "20px", gap: "10px", paddingTop: "20px" }}>
          <CustomButton variant="contained" color="success" type="submit">
            {idenetity === "signin" ? "Sign in" : "Create Account"}
          </CustomButton>
          <Divider sx={{ color: "#757575" }}>OR</Divider>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ gap: "4px" }}
          >
            <Typography sx={{ color: "#757575" }}>
              Delete an account?
            </Typography>
            <NavLink
              to="/auth/delete_user"
              style={({ isActive }) => ({
                color: "red",
                textDecoration: "none",
              })}
            >
              Click
            </NavLink>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default MainAuthRapper;

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import Box from "@mui/material/Box";
// import { Card, Stack, Typography, TextField, Button } from "@mui/material";
// import { NavLink } from "react-router-dom";

// function Login() {
//   // Initialize React Hook Form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Handle form submission
//   const onSubmit = (data) => {
//     console.log(data);
//     // You can handle form submission here (e.g., send data to an API)
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         m: "auto",
//         width: {
//           sm: "auto",
//           md: 600,
//         },
//         alignContent: "center",
//         display: "flex", // Adjusted for centering content
//         justifyContent: "center", // Adjusted for centering content
//         alignItems: "center", // Adjusted for centering content
//       }}
//     >
//       <Card sx={{ padding: 3, width: "100%" }}>
//         <Typography sx={{ fontWeight: "700" }} variant="h4">
//           Sign in to your account
//         </Typography>
//         <Stack
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           spacing={1}
//           sx={{ mb: 2 }}
//         >
//           <Typography>Don't have an account?</Typography>
//           <NavLink to="auth/signup" style={{ textDecoration: "none" }}>
//             Get Started
//           </NavLink>
//         </Stack>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Stack spacing={2} sx={{ paddingInline: "50px" }}>
//             <TextField
//               id="email"
//               label="Email Address"
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               error={!!errors.email}
//               helperText={errors.email ? errors.email.message : ""}
//             />
//             <TextField
//               id="password"
//               label="Password"
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               error={!!errors.password}
//               helperText={errors.password ? errors.password.message : ""}
//             />
//             <Stack
//               direction="row"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Button type="submit" variant="contained">
//                 Sign In
//               </Button>
//               <NavLink to="/forgot-password" style={{ textDecoration: "none" }}>
//                 Forgot password?
//               </NavLink>
//             </Stack>
//           </Stack>
//         </form>
//       </Card>
//     </Box>
//   );
// }

// export default Login;
