import React from "react";
import { Button, Input, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
          placeholder="Placeholder"
          inputProps={{ "aria-label": "description" }}
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
        <Grid item>
          <p>MAP</p>
        </Grid>
        <Grid item>
          <p>GLOBE</p>
        </Grid>
        <Grid item>
          <p>CONTENT</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
