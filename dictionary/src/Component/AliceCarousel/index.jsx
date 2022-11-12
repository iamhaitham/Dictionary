import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./style.module.css";
import { Container, Grid, Typography, Box } from "@mui/material";

const Swipper = () => {
  const itemsJson = [
    { key: 1, title: "sequacious ", description: " intellectually servile" },
    {
      key: 2,
      title: "inadmissible ",
      description: "not to be allowed",
    },
    {
      key: 3,
      title: "bad",
      description: "  low standard",
    },
    {
      key: 4,
      title: "dream",
      description: "cherished aspiration",
    },
    { key: 5, title: "series", description: "a number of things" },
    {
      key: 6,
      title: "location",
      description: "particular place or position",
    },
    { key: 7, title: "explore", description: "travel in or through" },
    { key: 8, title: "play", description: "engage in activity" },
    { key: 9, title: "item", description: "individual article or unit" },
    { key: 10, title: "lazy", description: "unwilling to worky" },
  ];
  //   const handleDragStart = (e) => e.preventDefault();

  return (
    <Container maxWidth="md">
      <h3 className={styles.header}>trending now </h3>
      <div>
        <AliceCarousel
          responsive
          mouseTracking
          autoWidth
          disableDotsControls
          // disableButtonsControls
          keyboardNavigation
          fadeOutAnimation={true}
          duration={400}
          items={itemsJson.map((data) => {
            const { title, description, key } = data;
            return (
              <>
                <div className={styles.cardWrapper}>
                  <Box
                    className={styles.card}
                    sx={{
                      mx: "auto",
                      width: 200,
                      p: 1,
                      borderRadius: 2,
                      textAlign: "left",
                      boxShadow: 3,
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs="auto">
                        <span className={styles.key}>{key}</span>
                      </Grid>
                      <Grid item xs={11}>
                        <p className={styles.title}>{title}</p>
                      </Grid>
                    </Grid>
                    <Typography variant="body1" className={styles.description}>
                      {description}
                    </Typography>
                  </Box>
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
