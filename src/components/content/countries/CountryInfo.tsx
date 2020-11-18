import React, { FC } from 'react';
import {
  Typography,
  withStyles,
  Grid,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import { CountryData } from './types';

const TextTypography = withStyles({
  root: {
    color: '#fff',
    fontSize: 12,
    borderBottom: '1px solid'
  }
})(Typography);

const CountryTypography = withStyles({
  root: {
    color: '#f5f5f5',
    fontSize: 8,
    background:
      'linear-gradient(90deg, rgba(239,239,241,1) 0%, rgba(25,42,124,1) 0%, rgba(85,108,214,1) 100%)',
    paddingLeft: 2,
    paddingTop: 1
  }
})(Typography);

const PopularityTypography = withStyles({
  root: {
    color: '#f5f5f5',
    fontSize: 8,
    paddingTop: 1
  }
})(Typography);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'relative'
    },
    countriesGrid: {
      [theme.breakpoints.up('xs')]: {
        width: 240,
        height: 140
      },
      [theme.breakpoints.up('sm')]: {
        width: 240,
        height: 120
      }
    },
    countryGrid: {
      width: 210,
      height: 40
    },
    countryNameProp: {
      width: 150,
      height: 40,
      textAlign: 'left',
      justifyItems: 'center'
    },
    namePopularityProp: {
      width: 60,
      height: 40,
      textAlign: 'right',
      justifyItems: 'center'
    }
  })
);

interface CountryInfoProps {
  data: {
    countries: CountryData[];
  };
}

const CountryInfo: FC<CountryInfoProps> = ({
  data: { countries }
}): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.countriesGrid}
      >
        {countries.map((country, i) => {
          return (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={`id-${i}`}
              className={classes.countryGrid}
              container
              direction="row"
            >
              <Grid className={classes.countryNameProp}>
                <CountryTypography>COUNTRY</CountryTypography>
                <TextTypography>{country.countryName}</TextTypography>
              </Grid>
              <Grid className={classes.namePopularityProp}>
                <PopularityTypography>POPULARITY</PopularityTypography>
                <TextTypography>
                  {`${country.namePopularity.toFixed(4)}%`}
                </TextTypography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CountryInfo;
