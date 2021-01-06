import React, { FC, useEffect } from 'react';
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
        height: '110px'
      },
      [theme.breakpoints.up('sm')]: {
        width: 290,
        height: 'auto'
      }
    },
    countryContainer: {
      [theme.breakpoints.up('xs')]: {
        color: 'white',
        fontSize: '17px',
        textAlign: 'center',
        marginTop: '10px',
        width: 200
      },
      [theme.breakpoints.up('sm')]: {
        width: 270
      }
    },
    countryGrid: {
      [theme.breakpoints.up('xs')]: {
        width: 200,
        height: 30
      },
      [theme.breakpoints.up('sm')]: {
        width: 250,
        marginBottom: 3,
        height: 40
      }
    },
    countryNameProp: {
      [theme.breakpoints.up('xs')]: {
        width: 140,
        textAlign: 'left',
        justifyItems: 'center'
      },
      [theme.breakpoints.up('sm')]: {
        width: 185,
        height: 40
      }
    },
    namePopularityProp: {
      [theme.breakpoints.up('xs')]: {
        width: 60,
        textAlign: 'right',
        justifyItems: 'center'
      },
      [theme.breakpoints.up('sm')]: {
        width: 65,
        height: 40
      }
    },
    countryDataText: {
      [theme.breakpoints.up('xs')]: {
        fontSize: 12,
        color: '#fff',
        borderBottom: '1px solid'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
        '&:hover': {
          paddingLeft: 4,
          transition: '0.3s',
          cursor: 'pointer'
        }
      }
    },
    countryText: {
      [theme.breakpoints.up('xs')]: {
        color: '#fff',
        fontSize: 8,
        background:
          'linear-gradient(90deg, rgba(10,191,64,1) 0%, rgba(72,72,72,1) 100%)',
        paddingLeft: 2,
        paddingTop: 1
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 10
      }
    },
    popularityText: {
      [theme.breakpoints.up('xs')]: {
        color: '#f5f5f5',
        fontSize: 8,
        paddingTop: 1
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 10
      }
    },
    popularityDataText: {
      [theme.breakpoints.up('xs')]: {
        color: '#fff',
        fontSize: 12,
        borderBottom: '1px solid'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 14
      }
    },
    countriesInfo: {
      [theme.breakpoints.up('xs')]: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        width: 240,
        marginBottom: 3
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
        width: 290,
        marginTop: 20
      }
    }
  })
);

interface CountryInfoProps {
  data: {
    countries: CountryData[];
    haveContent: boolean;
  };
  updateCentroid: (
    centroid: number[]
  ) => PayloadAction<'UPDATE_CENTROID', number[]>;
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

const CountryInfo: FC<CountryInfoProps> = ({
  data: { countries, haveContent },
  updateCentroid,
  updateCoords
}): JSX.Element => {
  const classes = useStyles();

  const getCentroid = (index: number) => {
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
    updateCoords([y, x]);
  };

  useEffect(() => {
    getCentroid(0);
  }, [haveContent]);

  return (
    <div>
      <Typography className={classes.countriesInfo}>
        Countries this name is popular in:
      </Typography>
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
