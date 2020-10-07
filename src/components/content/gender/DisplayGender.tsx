import React, { FC, useEffect } from "react";
import createDonutChart from "./createDonutChart";

interface DisplayGenderProps {
  maleShare: number;
  femaleShare: number;
}

const DisplayGender: FC<DisplayGenderProps> = (props) => {
  const generateSvg = () => {
    if (props.maleShare || props.femaleShare) {
      return <svg className="donut-svg"></svg>;
    }
  };

  useEffect(() => {
    if (props.maleShare || props.femaleShare) {
      createDonutChart(props.maleShare, props.femaleShare);
    }
  });

  return <div>{generateSvg()}</div>;
};

export default DisplayGender;
