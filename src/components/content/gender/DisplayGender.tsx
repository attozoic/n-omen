import React, { FC, useEffect } from "react";
import createDonutChart from "./createDonutChart";

interface DisplayGenderProps {
  maleShare: number | null;
}

const DisplayGender: FC<DisplayGenderProps> = (props) => {
  const generateSvg = (): JSX.Element => {
    let svg: JSX.Element;
    if (props.maleShare != null) {
      svg = <svg className="donut-svg" />;
    }
    return svg;
  };

  useEffect(() => {
    if (props.maleShare != null) {
      createDonutChart(props.maleShare);
    }
  });

  return <div>{generateSvg()}</div>;
};

export default DisplayGender;
