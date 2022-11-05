import React from "react";
import styles from "./style.module.css";
import { Dialog, DialogContent } from "@mui/material";
import DialogNav from "./DialogNav"
import ControlledSwitch from "./ControlledSwitch";

const DialogBox = ({ open, handleClose, wordInfo }) => {
  const { title, definition } = wordInfo;

  return (
    <Dialog
      classes={{ paper: open ? styles.dialog : styles.kk }}
      open={open}
      onClose={handleClose}
      fullScreen
    >
      <DialogNav handleClose={handleClose} />
      <DialogContent>
        <h2>{title}</h2>
        <p>{definition}</p>
        <ControlledSwitch />
        <span>QUESTION TIMER</span>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
