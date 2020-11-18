import React, { FC } from 'react';
import { Typography, LinearProgress, withStyles } from '@material-ui/core';

export interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

const TextTypography = withStyles({
  root: {
    color: '#556cd6',
    fontSize: 25,
    textAlign: 'center',
    width: 210,
    borderBottom: '1px solid',
    backgroundColor: '#fff'
  }
})(Typography);

const InfoTypography = withStyles({
  root: {
    color: '#556cd6',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff'
  }
})(Typography);

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
      <InfoTypography>AVERAGE AGE</InfoTypography>
      <TextTypography variant="h4" color="primary">
        {age}
      </TextTypography>
    </div>
  );
};

export default Age;
