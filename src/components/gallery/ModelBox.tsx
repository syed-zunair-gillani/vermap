"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GlobalContext } from "@/context/global-context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function GModelBox() {
  const { openGalleryModel, seOpenGalleryModel } =
    React.useContext(GlobalContext);

  const handleClose = () => seOpenGalleryModel(false);

  return (
    <div>
      <Modal
        open={openGalleryModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-[9999999]"
      >
        <Box sx={style} className="w-[100vw] h-[100vh]">
          <div>
            <button onClick={handleClose} className="bg-black p-1.5 rounded-full">
              <svg width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
                <path
                  fill="#fff"
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                />
              </svg>
            </button>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
