import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import GlobeContainer from '../src/components/locations/globe/GlobeContainer';
import CountryContainer from '../src/components/content/countries/CountryContainer';
import MapContainer from '../src/components/locations/map/MapContainer';
import store from '../src/state/store';
import AgeContainer from '../src/components/content/age/AgeContainer';
import GenderContainer from '../src/components/content/gender/GenderContainer';
import SearchContainer from '../src/components/search/SearchContainer';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#7FFFD4'
  },
  mapGrid: {
    height: '630px'
  },
  countryGrid: {
    color: '#1769aa',
    width: '250px'
  },
  genderGrid: {
    width: '250px'
  },
  ageGrid: {
    width: '250px'
  },
  paddingGrid: {
    marginTop: '40px',
    textAlign: 'center',
    height: '200px'
  }
});

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Grid className={classes.root}>
        <SearchContainer />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          classes={{ root: classes.paddingGrid }}
          justify-content="center"
        >
          <Grid xs={2} item classes={{ root: classes.ageGrid }}>
            <AgeContainer />
          </Grid>
          <Grid xs={2} item classes={{ root: classes.genderGrid }}>
            <GenderContainer />
          </Grid>
          <Grid xs={2} item classes={{ root: classes.countryGrid }}>
            <CountryContainer />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          classes={{ root: classes.mapGrid }}
        >
          <Box position="relative" width="100%">
            <Grid xs={12} item>
              <Container maxWidth="xl">
                <MapContainer />
              </Container>
            </Grid>
            <Grid>
              <Box position="absolute" zIndex="tooltip" right="2%" top="2%">
                <GlobeContainer />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Provider>
  );
}
