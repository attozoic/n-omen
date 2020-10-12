import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Country } from "./types";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: 20
  }
})(Typography);

const formatNamePopularity = (percentage: number | null): JSX.Element => {
  let div: JSX.Element;
  if (percentage != null) {
    const fixedPercentage = `${percentage.toFixed(4)}%`;
    div = <div>{fixedPercentage}</div>;
  }
  return div;
};

const formatCountryInfo = (country: Country): JSX.Element => {
  let div: JSX.Element;
  if (country.countryName != null) {
    div = (
      <div>
        <WhiteTextTypography>{country.countryName}</WhiteTextTypography>
        <WhiteTextTypography>
          {formatNamePopularity(country.namePopularity)}
        </WhiteTextTypography>
        <Divider />
      </div>
    );
  }
  return div;
};

const showCountryInfo = (countries: Country[]): JSX.Element[] => {
  const div: JSX.Element[] = [];
  if (countries[0].countryName != null) {
    for (let i = 0; i < countries.length; i += 1) {
      if (i === 0) {
        div.push(<Divider />);
      }
      div.push(formatCountryInfo(countries[i]));
    }
  }
  return div;
};

export default showCountryInfo;
