import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h1' color='primary'>
            Video
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant='outlined' color='primary'>
            Get in touch
          </Button>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' color='primary'>
              Our mission
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='p' style={{ color: "#fff" }}>
              Texto explicando lo que hacemos por que lo hacemos y a quienes
              ayudamos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant='outlined' color='primary'>
              Get in touch
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant='h5' style={{ color: "#fff" }}>
              Custom Focus
            </Typography>

            <Typography variant='p' style={{ color: "#fff" }}>
              Texto explicando el valor de ChemDye. Texto explicando el valor de
              ChemDye. Texto explicando el valor de ChemDye.Texto explicando el
              valor de ChemDye. Texto explicando el valor de ChemDye.
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant='h5' style={{ color: "#fff" }}>
              Quality scientific deliveries
            </Typography>

            <Typography variant='p' style={{ color: "#fff" }}>
              Texto explicando el valor de ChemDye. Texto explicando el valor de
              ChemDye. Texto explicando el valor de ChemDye.Texto explicando el
              valor de ChemDye. Texto explicando el valor de ChemDye.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h5' style={{ color: "#fff" }}>
              Empathy and Honest
            </Typography>

            <Typography variant='p' style={{ color: "#fff" }}>
              Texto explicando el valor de ChemDye. Texto explicando el valor de
              ChemDye. Texto explicando el valor de ChemDye.Texto explicando el
              valor de ChemDye. Texto explicando el valor de ChemDye.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
