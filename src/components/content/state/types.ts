import { CountryData } from '../countries/types';

export interface ContentState {
  isLoading: boolean;
  mobileOpen: boolean;
  error: Error;
  nameInfo: NameInfo;
}

export interface NameInfo {
  name: string;
  age: number;
  maleShare: number;
  countries: CountryData[];
  countryIds: string[];
}
