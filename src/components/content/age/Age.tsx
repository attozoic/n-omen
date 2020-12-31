import React, { FC } from 'react';
import {
  Typography,
  LinearProgress,
  makeStyles,
  createStyles
} from '@material-ui/core';

export interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

const useStyles = makeStyles(() =>
  createStyles({
    ageText: {
      color: '#556cd6',
      fontSize: 8,
      textAlign: 'center',
      marginTop: 10,
      backgroundColor: '#fff'
    },
    ageDataText: {
      color: '#556cd6',
      fontSize: 25,
      textAlign: 'center',
      width: 210,
      backgroundColor: '#fff'
    }
  })
);

const Age: FC<AgeProps> = ({
  data: { age },
  isLoading,
  error
}): JSX.Element => {
  const classes = useStyles();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return (
    <div>
      <Typography className={classes.ageText}>AVERAGE AGE</Typography>
      <Typography className={classes.ageDataText}>{age}</Typography>
    </div>
  );
};

export default Age;
