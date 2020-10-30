import React, { FC } from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { CountryData } from "./types";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: 20
  }
})(Typography);

interface CountryInfoProps {
  data: {
    countries: CountryData[];
  };
}

const CountryInfo: FC<CountryInfoProps> = (props): JSX.Element => {
  const { data } = props;
  const { countries } = data;

  const createFirstDivider = (index: number): JSX.Element => {
    let dividerEl: JSX.Element;
    if (index === 0) {
      dividerEl = <Divider />;
    }
    return dividerEl;
  };

  return (
    <div>
      {countries.map((country, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div data-testid="countryWrapper" key={`id-${i}`}>
            {createFirstDivider(i)}
            <WhiteTextTypography>{country.countryName}</WhiteTextTypography>
            <WhiteTextTypography>
              {`${country.namePopularity.toFixed(4)}%`}
            </WhiteTextTypography>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
