import { LinearProgress, Typography, Divider } from '@material-ui/core';
import React, { FC } from 'react';

export interface NameProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    name: string;
  };
}

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
      <Divider />
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
    </div>
  );
};

export default Name;
