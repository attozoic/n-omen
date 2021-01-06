import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: '30%',
        width: 200,
        fontStyle: 'italic',
        marginLeft: 20
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 20,
        width: 250
      }
    }
  })
);

export interface InstructionsProps {
  firstSearchDone: boolean;
  error: Error | null;
}

const Instructions: FC<InstructionsProps> = ({
  firstSearchDone,
  error
}): JSX.Element => {
  const classes = useStyles();

  if (firstSearchDone) {
    return <Typography className={classes.root}>{error.message}</Typography>;
  }

  return (
    <Typography className={classes.root}>
      Type a name in the
      <br /> search bar.
    </Typography>
  );
};

export default Instructions;
