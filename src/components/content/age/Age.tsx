import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Typography, LinearProgress } from '@material-ui/core';
import { ContentState } from '../state/types';

interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

const Age: FC<AgeProps> = (props): JSX.Element => {
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

const mapStateToProps = (state: { content: ContentState }) => {
  return {
    data: {
      age: state.content.nameInfo.age
    },
    isLoading: state.content.isLoading,
    error: state.content.error
  };
};

export default connect(mapStateToProps)(Age);
