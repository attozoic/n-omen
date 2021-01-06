import React, { FC } from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ageContainter: {
      textAlign: 'center'
    },
    didYouKnowText: {
      [theme.breakpoints.up('xs')]: {
        color: '#0abf40',
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 15
      },
      [theme.breakpoints.up('sm')]: {
        color: '#0abf40',
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 50
      }
    },
    ageText: {
      [theme.breakpoints.up('xs')]: {
        color: '#E8E8E8',
        fontSize: 14,
        textAlign: 'center',
        fontStyle: 'italic',
        paddingBottom: 10
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 17
      }
    }
  })
);

export interface AgeProps {
  data: {
    age: number | null;
    name: string;
  };
}

const Age: FC<AgeProps> = ({ data: { age, name } }): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.ageContainter}>
      <Typography className={classes.didYouKnowText}>Did you know:</Typography>
      <Typography className={classes.ageText}>
        People named {name} have
        <br />
        an average age of {age}.
      </Typography>
    </div>
  );
};

export default Age;
