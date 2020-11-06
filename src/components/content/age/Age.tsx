import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Typography, LinearProgress } from '@material-ui/core';
import { AppState } from '../../../state/initialState';

interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

export const Age: FC<AgeProps> = (props): JSX.Element => {
  const { data, isLoading, error } = props;
  const { age } = data;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <Typography>{age}</Typography>;
};

export const mapStateToProps = (state: AppState): AgeProps => {
  return {
    data: {
      age: state.content.nameInfo.age
    },
    isLoading: state.content.isLoading,
    error: state.content.error
  };
};

export default connect(mapStateToProps)(Age);
