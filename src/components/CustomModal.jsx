import * as React from "react";
import Box from "@mui/material/Box";
import { Modal, Button } from "@mui/material";
import ForgotPassward from "./ForgotPassward.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 30,
  borderRadius: "10px",
  padding: "30px",
};

export default function CustomModal({ children, email }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ textTransform: "none", color: "unset", padding: "0" }}
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ForgotPassward email={email} />
        </Box>
      </Modal>
    </div>
  );
}
