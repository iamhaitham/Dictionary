import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import styles from "./style.module.css";

const Icons = ({ open }) => {
  return (
    <IconButton className={styles.iconWrapper}>
      {open ? (
        <EastIcon className={styles.icon} />
      ) : (
        <MicIcon className={styles.icon} />
      )}
    </IconButton>
  );
};

export default Icons;
