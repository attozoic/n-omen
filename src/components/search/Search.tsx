import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GET_NAME_INFO } from '../../state/actions';

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

interface SearchProps {
  getNameInfo: () => { type: string };
}

const Search: FC<SearchProps> = (props): JSX.Element => {
  const classes = useStyles();
  const { getNameInfo } = props;
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

const mapDispatchToProps = (dispatch) => {
  return {
    getNameInfo: () => dispatch({ type: GET_NAME_INFO })
  };
};

export default connect(null, mapDispatchToProps)(Search);
