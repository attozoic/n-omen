import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CountryContiner from '../src/components/content/countries/CountryContainer';
import MapWrapper from '../src/components/map/MapWrapper';
import GlobeWrapper from '../src/components/globe/GlobeWrapper';
import store from '../src/state/store';
import AgeContainer from '../src/components/content/age/AgeContainer';
import GenderContainer from '../src/components/content/gender/GenderContainer';
import SearchContainer from '../src/components/search/SearchContainer';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#7FFFD4'
  },
  itemsGrid: {
    height: '600px'
  },
  contentGrid: {
    background: '#556cd6',
    textAlign: 'center'
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
          justify="space-around"
          alignItems="center"
          classes={{ root: classes.itemsGrid }}
        >
          <Grid xs={3} item classes={{ root: classes.contentGrid }}>
            <GenderContainer />
            <AgeContainer />
            <CountryContiner />
          </Grid>
          <Grid xs={3} item>
            <MapWrapper
              isLoading
              error={null}
              data={{
                globeCoords: [0, 0],
                countryIds: ['RS', 'HR']
              }}
            />
          </Grid>
          <Grid xs={3} item>
            <GlobeWrapper
              isLoading
              error={null}
              data={{
                mapCoords: [0, 0],
                countryIds: ['RS', 'HR']
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Provider>
  );
}
