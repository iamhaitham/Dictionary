import React from 'react'
import styles from "./style.module.css";
import Grid from "@mui/material/Grid";

const Logo = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <img
        src="https://d1sud0deeo84nn.cloudfront.net/0k3H1YRZBRXPgdnUINMvXZ1o7a1NR0Pat7Tzcjfr.png"
        alt="Dictionary Logo"
        width={180}
        height={30}
        className={styles.logo}
      />
    </Grid>
  );
}

export default Logo
