import React, { FC } from 'react';
import { Typography, LinearProgress } from '@material-ui/core';

export interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

const Age: FC<AgeProps> = ({
  data: { age },
  isLoading,
  error
}): JSX.Element => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <Typography>{age}</Typography>;
};

export default Age;
