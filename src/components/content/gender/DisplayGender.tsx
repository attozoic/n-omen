import React, { FC, useEffect } from "react";
import createDonutChart from "./createDonutChart";
import { IoMdFemale, IoMdMale } from "react-icons/io";

interface DisplayGenderProps {
  gender: string;
  genderPercentage: number;
}

const DisplayGender: FC<DisplayGenderProps> = (props) => {
  const showGenderIcon = (gender: string) => {
    if (gender === "female") {
      return <IoMdFemale className="gender-icon" />;
    } else if (gender === "male") {
      return <IoMdMale className="gender-icon" />;
    }
  };

  useEffect(() => {
    createDonutChart(props.gender, props.genderPercentage);
  });

  if (props.gender) {
    return (
      <div>
        <svg className="donut-svg" width="200" height="200">
          {showGenderIcon(props.gender)}
          <g></g>
        </svg>
      </div>
    );
  } else {
    return null;
  }
};

export default DisplayGender;
