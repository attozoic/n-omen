import React, { FC } from "react";
import showCountryInfo from "./showCountryInfo";
import { Country } from "./types";

interface DisplayCountriesProps {
  countries: Country[];
}

const DisplayCountries: FC<DisplayCountriesProps> = (props) => {
  const { countries } = props;
  return <div>{showCountryInfo(countries)}</div>;
};

export default DisplayCountries;
