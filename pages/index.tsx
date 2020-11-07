import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Gender from '../src/components/content/gender/Gender';
import Country from '../src/components/content/countries/Country';
import MapWrapper from '../src/components/locations/map/MapWrapper';
import GlobeWrapper from '../src/components/locations/globe/GlobeWrapper';
import store from '../src/state/store';
import Search from '../src/components/search/Search';
import AgeContainer from '../src/components/content/age/AgeContainer';

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
        <Search />

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          classes={{ root: classes.itemsGrid }}
        >
          <Grid xs={3} item classes={{ root: classes.contentGrid }}>
            <Gender data={{ maleShare: 80 }} isLoading error={null} />
            <AgeContainer />
            <Country
              data={{
                countries: [
                  {
                    countryName: 'Serbia',
                    namePopularity: 0.88823
                  },
                  {
                    countryName: 'Russia',
                    namePopularity: 0.847328
                  },
                  {
                    countryName: 'Belarus',
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
