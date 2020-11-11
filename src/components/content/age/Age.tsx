import React, { FC } from 'react';
import { Typography, LinearProgress, Divider } from '@material-ui/core';

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

  return (
    <div>
      <Divider />
      <Typography variant="h5" color="primary">
        Age:
      </Typography>
      <Typography variant="h4" color="primary">
        {age}
      </Typography>
      <Divider />;
    </div>
  );
};

export default Age;
