import React, { FC, useEffect } from "react";
import createDonutChart from "./createDonutChart";

interface GenderProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    maleShare: number | null;
  };
}

const Gender: FC<GenderProps> = (props) => {
  const { data } = props;
  const { maleShare } = data;

  const generateSvg = (): JSX.Element => {
    let svg: JSX.Element;
    if (maleShare != null) {
      svg = <svg className="donut-svg" />;
    }
    return svg;
  };

  useEffect(() => {
    if (maleShare != null) {
      createDonutChart(maleShare);
    }
  });

  return <div>{generateSvg()}</div>;
};

export default Gender;
