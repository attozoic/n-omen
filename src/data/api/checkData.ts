const checkData = (data: {
  name: string | null;
  age: number | null;
  maleShare: number | null;
  countries: string[];
  countryIds: string[];
}):
  | {
      name: string | null;
      age: number | null;
      maleShare: number | null;
      countries: string[];
      countryIds: string[];
    }
  | Error => {
  const errorMessage = 'No results found. Try typing a different name.';

  const dataIsFull =
    data.name !== null &&
    data.age !== null &&
    data.maleShare !== null &&
    data.countries.length > 0 &&
    data.countryIds.length > 0;

  if (dataIsFull) {
    return data;
  }

  throw new Error(errorMessage);
};

export default checkData;
