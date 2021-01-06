import React, { FC } from 'react';

import DonutChart from './DonutChart';

export interface GenderProps {
  data: {
    maleShare: number | null;
  };
}

const Gender: FC<GenderProps> = ({ data }): JSX.Element => {
  return <DonutChart data={data} />;
};

export default Gender;
