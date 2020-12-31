import {
  LinearProgress,
  Typography,
  makeStyles,
  createStyles
} from '@material-ui/core';
import React, { FC } from 'react';

export interface NameProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    name: string;
  };
}

const useStyles = makeStyles(() =>
  createStyles({
    nameText: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center',
      width: 240,
      height: 40,
      borderBottom: '1px solid',
      backgroundColor: '#4456ab'
    }
  })
);

const Name: FC<NameProps> = ({
  data: { name },
  isLoading,
  error
}): JSX.Element => {
  const classes = useStyles();
  if (isLoading) return <LinearProgress />;

  if (error != null) {
    return <div>Error component</div>;
  }
  return (
    <div>
      <Typography className={classes.nameText}>{name}</Typography>
    </div>
  );
};

export default Name;
