import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.root}>
      <Grid item xs={12}>
        <Typography
          variant='h3'
          component='h2'
          align='center'
          gutterBottom
          color='primary'
        >
          Welcome to my Gallery
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' align='justify'>
          "ChemDye" born with the idea to help researchers to achieve their
          goals using the powerful tool of visual communication. As a scientist
          myself, I understood that time and resources are essential in
          research, let’s not waste it. I will put all my knowledge in chemistry
          and biology to create the right image of your investigation in a short
          time frame.
        </Typography>
      </Grid>
    </Container>
  );
};
export default Portfolio;
