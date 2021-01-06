import React, { FC } from 'react';
import {
  CircularProgress,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingCircle: {
      textAlign: 'center'
    },
    loadingContainer: {
      [theme.breakpoints.up('xs')]: {
        width: 240,
        textAlign: 'center',
        marginTop: '30%'
      },
      [theme.breakpoints.up('sm')]: {
        width: 290,
        textAlign: 'center',
        marginTop: '30%'
      }
    }
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoadingIndicatorProps {}

const LoadingIndicator: FC<LoadingIndicatorProps> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress
        size={80}
        thickness={10}
        className={classes.loadingCircle}
      />
    </div>
  );
};

export default LoadingIndicator;
