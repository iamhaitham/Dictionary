import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { ClassNames } from "@emotion/react";
import styles from "./style.module.css";
import { style } from "@mui/system";
import { Container, Grid } from "@mui/material";

const Swipper = () => {
  const itemsJson = [
    { key: 1, title: "Sequacious", description: "explicitly documented" },
    { key: 2, title: "Indmissible", description: "available on Dialog" },
    { key: 3, title: "documentation", description: "API documentation" },
    { key: 4, title: "Sequacious", description: "explicitly documented" },
    { key: 5, title: "Indmissible", description: "available on Dialog" },
    { key: 3, title: "documentation", description: "API documentation" },
  ];
  //   const handleDragStart = (e) => e.preventDefault();

  return (
    <Container maxWidth="sm">
      <div>
        <AliceCarousel
          mouseTracking
          autoWidth={true}
          disableDotsControls
          disableButtonsControls
          paddingLeft={20}
          arrow={false}
          keyboardNavigation={true}
          items={itemsJson.map((data) => {
            const { title, description, key } = data;
            return (
              <>
                <div className={styles.belowCard}>
                  <div className={styles.innerCard}>
                    {/* <Grid container spacing={0} alignItems="center">
                      <Grid item xs="auto">
                        <span>{key}</span>
                      </Grid>
                      <Grid item xs={11}> */}
                    {/* </Grid>
                    </Grid> */}
                    <div className={styles.innerCardTitle}>
                      <span className={styles.key}>{key}</span>
                      <span className={styles.title}>{title}</span>
                    </div>
                    <p className={styles.description}>{description}</p>
                  </div>
                </div>
              </>
            );
          })}
        />
      </div>
    </Container>
  );
};

export default Swipper;
