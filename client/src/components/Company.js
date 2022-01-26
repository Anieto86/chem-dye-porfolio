import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import companies from "../data/dataCompanies";

const Company = () => {
  return (
    <Container>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={5}
      >
        {companies.map((company, i) => (
          <Grid item key={i}>
            <Typography>{company.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Company;
