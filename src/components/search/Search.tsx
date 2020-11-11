import React, { FC } from 'react';
import { Button, Input, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    textAlign: 'center'
  },
  inputGrid: {
    height: '100px'
  },
  buttonGrid: {
    height: '5px'
  }
});

export interface SearchProps {
  getNameInfo: () => void;
}

const Search: FC<SearchProps> = ({ getNameInfo }): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        classes={{ root: classes.inputGrid }}
      >
        <Input
          placeholder="Type a name here..."
          classes={{ root: classes.input }}
          id="search-input"
        />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        classes={{ root: classes.buttonGrid }}
      >
        <Button color="primary" variant="contained" onClick={getNameInfo}>
          Search
        </Button>
      </Grid>
    </div>
  );
};

export default Search;
