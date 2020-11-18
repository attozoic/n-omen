import { LinearProgress, Typography, withStyles } from '@material-ui/core';
import React, { FC } from 'react';

export interface NameProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    name: string;
  };
}

const TextTypography = withStyles({
  root: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    width: 240,
    height: 40,
    borderBottom: '1px solid',
    backgroundColor: '#4456ab'
  }
})(Typography);

const Name: FC<NameProps> = ({
  data: { name },
  isLoading,
  error
}): JSX.Element => {
  if (isLoading) return <LinearProgress />;

  if (error != null) {
    return <div>Error component</div>;
  }
  return (
    <div>
      <TextTypography variant="h3" color="primary">
        {name}
      </TextTypography>
    </div>
  );
};

export default Name;
