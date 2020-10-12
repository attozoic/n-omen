import React from "react";
import { Button, Input, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplayGender from "../src/components/content/gender/DisplayGender";
import DisplayCountries from "../src/components/content/countries/DisplayCountries";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "#7FFFD4"
  }
});

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100px" }}
      >
        <Input
          placeholder="Type a name here..."
          inputProps={{
            "aria-label": "description",
            style: { textAlign: "center" }
          }}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "5px" }}
      >
        <Button color="primary" variant="contained">
          Button
        </Button>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        style={{ height: "600px" }}
      >
        <Grid item style={{ backgroundColor: "#556cd6", textAlign: "center" }}>
          <DisplayGender maleShare={90} />
          <DisplayCountries
            countries={[
              {
                countryName: "Serbia",
                namePopularity: 0.88823
              },
              {
                countryName: "Russia",
                namePopularity: 0.847328
              },
              {
                countryName: "Belarus",
                namePopularity: 0.52323
              }
            ]}
          />
        </Grid>
        <Grid item>
          <p>MAP</p>
        </Grid>
        <Grid item>
          <p>GLOBE</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
