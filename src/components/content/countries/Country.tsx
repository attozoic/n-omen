import React, { FC } from "react";
import CountryInfo from "./CountryInfo";
import { CountryData } from "./types";

interface CountryProps {
  isLoading: boolean;
  error: Error | null;
  data: {
    countries: CountryData[];
  };
}

const Country: FC<CountryProps> = (props): JSX.Element => {
  const { data } = props;
  const { countries } = data;

  const showCountryInfo = (): JSX.Element => {
    let countryInfoEl: JSX.Element;
    if (countries[0].countryName != null) {
      countryInfoEl = <CountryInfo countries={countries} />;
    }
    return countryInfoEl;
  };

  return <div>{showCountryInfo()}</div>;
};

export default Country;
