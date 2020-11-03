import React from "react";
import { Button, Input, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import Gender from "../src/components/content/gender/Gender";
import Age from "../src/components/content/age/Age";
import Country from "../src/components/content/countries/Country";
import MapWrapper from "../src/components/map/MapWrapper";
import GlobeWrapper from "../src/components/globe/GlobeWrapper";
import configureStore from "../src/state/store";

const { store } = configureStore;

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "#7FFFD4"
  },
  input: {
    textAlign: "center"
  },
  inputGrid: {
    height: "100px"
  },
  itemsGrid: {
    height: "600px"
  },
  buttonGrid: {
    height: "5px"
  },
  contentGrid: {
    background: "#556cd6",
    textAlign: "center"
  }
});

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Grid className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          classes={{ root: classes.inputGrid }}
        >
          <Input
            placeholder="Type a name here..."
            classes={{ root: classes.input }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          classes={{ root: classes.buttonGrid }}
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
          classes={{ root: classes.itemsGrid }}
        >
          <Grid xs={3} item classes={{ root: classes.contentGrid }}>
            <Gender data={{ maleShare: 80 }} isLoading error={null} />
            <Age data={{ age: 45 }} isLoading error={null} />
            <Country
              data={{
                countries: [
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
                ]
              }}
              isLoading
              error={null}
            />
          </Grid>
          <Grid xs={3} item>
            <MapWrapper
              isLoading
              error={null}
              data={{
                globeCoords: [0, 0],
                countryIds: ["RS", "HR"]
              }}
            />
          </Grid>
          <Grid xs={3} item>
            <GlobeWrapper
              isLoading
              error={null}
              data={{
                mapCoords: [0, 0],
                countryIds: ["RS", "HR"]
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Provider>
  );
}
