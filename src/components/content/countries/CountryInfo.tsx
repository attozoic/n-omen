import React, { FC } from 'react';
import {
  Typography,
  Grid,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import { PayloadAction } from 'typesafe-actions';
import { CountryData } from './types';
import json from '../../../data/geo.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    countryDataText: {
      color: '#fff',
      fontSize: 12,
      borderBottom: '1px solid',
      [theme.breakpoints.up('sm')]: {
        '&:hover': {
          paddingLeft: 4,
          transition: '0.3s',
          cursor: 'pointer'
        }
      }
    },
    countryText: {
      color: '#fff',
      fontSize: 8,
      background:
        'linear-gradient(90deg, rgba(239,239,241,1) 0%, rgba(25,42,124,1) 0%, rgba(85,108,214,1) 100%)',
      paddingLeft: 2,
      paddingTop: 1
    },
    popularityText: {
      color: '#f5f5f5',
      fontSize: 8,
      paddingTop: 1
    },
    popularityDataText: {
      color: '#fff',
      fontSize: 12,
      borderBottom: '1px solid'
    }
  })
);

interface CountryInfoProps {
  data: {
    countries: CountryData[];
  };
  updateCentroid: (
    centroid: number[]
  ) => PayloadAction<'UPDATE_CENTROID', number[]>;
}

const CountryInfo: FC<CountryInfoProps> = ({
  data: { countries },
  updateCentroid
}): JSX.Element => {
  const classes = useStyles();

  const getCentroid = (index) => {
    const chosenId = countries[index].countryName;
    let chosenCoordinates;

    for (let i = 0; i < json.features.length; i += 1) {
      if (json.features[i].properties.admin === chosenId) {
        if (json.features[i].geometry.type === 'Polygon') {
          // eslint-disable-next-line prefer-destructuring
          chosenCoordinates = json.features[i].geometry.coordinates[0];
        } else {
          let newArray = [];
          const chosenCountry = json.features[i];
          for (
            let j = 0;
            j < chosenCountry.geometry.coordinates.length;
            j += 1
          ) {
            for (
              let k = 0;
              k < chosenCountry.geometry.coordinates[j].length;
              k += 1
            ) {
              newArray = newArray.concat(
                chosenCountry.geometry.coordinates[j][k]
              );
            }
          }
          chosenCoordinates = newArray;
        }
      }
    }
    let minX = chosenCoordinates[0][0];
    let maxX = chosenCoordinates[0][0];
    let minY = chosenCoordinates[0][1];
    let maxY = chosenCoordinates[0][1];

    for (let i = 0; i < chosenCoordinates.length; i += 1) {
      if (minX > chosenCoordinates[i][0]) {
        // eslint-disable-next-line prefer-destructuring
        minX = chosenCoordinates[i][0];
      }
      if (maxX < chosenCoordinates[i][0]) {
        // eslint-disable-next-line prefer-destructuring
        maxX = chosenCoordinates[i][0];
      }
      if (minY > chosenCoordinates[i][1]) {
        // eslint-disable-next-line prefer-destructuring
        minY = chosenCoordinates[i][1];
      }
      if (maxY < chosenCoordinates[i][1]) {
        // eslint-disable-next-line prefer-destructuring
        maxY = chosenCoordinates[i][1];
      }
    }
    const x = (minX + maxX) / 2;
    const y = (minY + maxY) / 2;
    updateCentroid([y, x]);
  };

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
                <Typography className={classes.countryText}>
                  {i + 1}. COUNTRY
                </Typography>
                <Typography
                  onClick={() => {
                    getCentroid(i);
                  }}
                  className={classes.countryDataText}
                >
                  {country.countryName}
                </Typography>
              </Grid>
              <Grid className={classes.namePopularityProp}>
                <Typography className={classes.popularityText}>
                  POPULARITY
                </Typography>
                <Typography className={classes.popularityDataText}>
                  {`${(country.namePopularity * 100).toFixed(2)}%`}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CountryInfo;
