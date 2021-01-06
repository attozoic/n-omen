import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nameText: {
      [theme.breakpoints.up('xs')]: {
        color: '#E8E8E8',
        borderBottom: '4px solid #E8E8E8',
        textAlign: 'center',
        fontSize: 35
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 45,
        marginTop: '40px',
        paddingBottom: '40px'
      }
    }
  })
);

export interface NameProps {
  data: {
    name: string;
  };
}

const Name: FC<NameProps> = ({ data: { name } }): JSX.Element => {
  const classes = useStyles();

  return <Typography className={classes.nameText}>{name}</Typography>;
};

export default Name;
