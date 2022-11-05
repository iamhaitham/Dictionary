import React from "react";
import styles from "./style.module.css";

import Grid from "@mui/material/Grid";

const Card = ({ handleClose,open }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.card}
    >
      <Grid item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvepBJUTrIAgqexE7J9Z7ZofuHY75H6NumhpoumoIJ3vkABnPT-vuZr79-XJPgN-Z77E&usqp=CAU"
          alt=""
          // className={open ? styles.cardImageFull : styles.cardImage}
        />
        <br />
        <button onClick={handleClose}>Click To open Dialog</button>
      </Grid>
    </Grid>
  );
};

export default Card;

<svg xmlns="http://www.w3.org/2000/svg" width="286" height="64" viewBox="0 0 286 64">
  <text id="Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit._In_augue_nunc_vel_rhoncus_sed._Neque_hendrerit_risus_ut_metus_ultrices_ac._Dui_morbi_eu_amet_id_mauris._Eget_at_ut." data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui morbi eu amet id mauris. Eget at ut." fill="#4f4f4f" font-size="12" font-family="SegoeUI, Segoe UI" opacity="0.7"><tspan x="0" y="13">Lorem ipsum dolor sit amet, consectetur adipiscing </tspan><tspan x="0" y="29">elit. In augue nunc vel rhoncus, sed. Neque hendrerit </tspan><tspan x="0" y="45">risus ut metus ultrices ac. Dui morbi eu amet id </tspan><tspan x="0" y="61">mauris. Eget at ut.</tspan></text>
</svg>

