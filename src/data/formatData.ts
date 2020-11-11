import { NameInfo } from '../components/content/state/types';
import { Genderize, Agify, Nationalize } from './types';
import jsonData from './geo.json';
import { CountryData } from '../components/content/countries/types';

const getFullCountryNames = (idArr: string[]) => {
  const jsonArr = jsonData.features;
  const countryNamesArr: string[] = [];

  for (let i = 0; i < idArr.length; i += 1) {
    for (let j = 0; j < jsonArr.length; j += 1) {
      if (jsonArr[j].properties.iso_a2 === idArr[i]) {
        countryNamesArr.push(jsonArr[j].properties.admin);
      }
    }
  }

  return countryNamesArr;
};

const getMaleShare = (gender: string, percentage: number): number => {
  let maleShare: number;

  if (gender === 'male') {
    maleShare = percentage * 100;
  } else {
    maleShare = 100 - percentage * 100;
  }

  return maleShare;
};

const getCountryDataArray = (
  countryNamesArr: string[],
  namePopularityArr: number[]
) => {
  const countryDataArr: CountryData[] = [];

  for (let i = 0; i < countryNamesArr.length; i += 1) {
    const countryData = {
      countryName: countryNamesArr[i],
      namePopularity: namePopularityArr[i]
    };
    countryDataArr.push(countryData);
  }

  return countryDataArr;
};

const formatData = (
  agify: Agify,
  nationalize: Nationalize,
  genderize: Genderize
): NameInfo => {
  const countryIds = nationalize.country.map((e) => e.country_id);
  const namePopularityArr = nationalize.country.map((e) => e.probability);

  const data = {
    name:
      agify.name.charAt(0).toUpperCase() + agify.name.slice(1).toLowerCase(),
    countries: getCountryDataArray(
      getFullCountryNames(countryIds),
      namePopularityArr
    ),
    age: agify.age,
    maleShare: getMaleShare(genderize.gender, genderize.probability),
    countryIds
  };

  return data;
};

export default formatData;
