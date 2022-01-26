import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  //CardMedia,
  Button,
  Box,
  // Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import services from "../data/dataServices";

const useStyles = makeStyles(({ breakpoints, spacing, theme }) => ({
  root: {
    overflow: "initial",
    width: 500,
    backgroundColor: "transparent",
  },
  media: {
    width: 500,
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-6),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
  },
  imagesStyle: { width: 500, margin: "auto", borderRadius: "16px" },
  content: {
    backgroundColor: "red",
    marginLeft: "60%",
    borderRadius: "16px",
    borderColor: "#D4FE52",
    padding: 24,
    zIndex: 1,
  },
}));

const Service = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1' color='primary'>
            Service
          </Typography>
        </Grid>

        <Grid
          container
          spacing={5}
          justifyContent='center'
          alignItems='center'
          direction='column'
        >
          {services.map((service, i) => {
            return (
              <Grid item key={i}>
                <Card className={classes.root} elevation={0}>
                  {/* <Box>
                    <CardMedia className={classes.media} image={service.img} />
                  </Box> */}

                  <img
                    src={service.img}
                    className={classes.imagesStyle}
                    alt='home imgs'
                  />

                  <Box className={classes.content}>
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {service.title}
                      </Typography>

                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='big' color='primary' variant='outlined'>
                        More
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
