import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface AgeProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    age: number | null;
  };
}

const Age: FC<AgeProps> = (props): JSX.Element => {
  const { data } = props;
  const { age } = data;
  return <Typography>{age}</Typography>;
};

export default Age;
