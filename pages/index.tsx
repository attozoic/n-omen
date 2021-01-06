import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import GlobeContainer from '../src/components/locations/globe/GlobeContainer';
import MapContainer from '../src/components/locations/map/MapContainer';
import store from '../src/state/store';
import SearchContainer from '../src/components/search/SearchContainer';
import ContentDrawerContainer from '../src/components/content/drawer/ContentDrawerContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      background:
        'linear-gradient(180deg, rgba(19,15,64,1) 25%, rgba(66,62,102,1) 100%)'
    },
    mapGrid: {
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        width: 'calc(100vw - 290px)',
        marginLeft: 290
      },
      height: `calc(100vh - 56px)`,
      position: 'relative'
    },
    globeGrid: {
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 1500,
      right: '15px',
      top: '15px',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  })
);

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Grid className={classes.root}>
        <SearchContainer />
        <ContentDrawerContainer />
        <Grid classes={{ root: classes.mapGrid }}>
          <MapContainer />
          <Grid classes={{ root: classes.globeGrid }}>
            <GlobeContainer />
          </Grid>
        </Grid>
      </Grid>
    </Provider>
  );
}
