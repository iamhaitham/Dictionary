import React from "react";
import styles from "./style.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from "@mui/icons-material/Reply";
import { Container, Grid } from "@mui/material";

const DialogNav = ({ handleClose }) => {
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="space-between">
        <Grid item xs={1}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon className={styles.closeIcon}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton edge="start" color="inherit">
            <ReplyIcon className={styles.replyIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DialogNav;
