import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';
import DonutChart from './DonutChart';

interface GenderProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    maleShare: number | null;
  };
}

const Gender: FC<GenderProps> = (props) => {
  const { data, isLoading, error } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error != null) {
    return <div>Error component</div>;
  }

  return <DonutChart data={data} />;
};

export default Gender;
