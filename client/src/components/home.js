import React from "react";
import styled from "styled-components";

import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid item>
        <Typography>Providing services in </Typography>
      </Grid>
    </Container>
  );
};
export default Home;
