import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface DisplayAgeProps {
  age: number | null;
}

const DisplayAge: FC<DisplayAgeProps> = (props): JSX.Element => {
  const { age } = props;
  return <Typography>{age}</Typography>;
};

export default DisplayAge;
