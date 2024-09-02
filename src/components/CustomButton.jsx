import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)({
  textTransform: "none",
  color: "white",
  backgroundColor: "#212121",
  "&:hover": {
    backgroundColor: "black",
  },
});
