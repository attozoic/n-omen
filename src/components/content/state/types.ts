export interface ContentState {
  isLoading: boolean;
  error: Error;
  nameInfo: NameInfo;
}

export interface NameInfo {
  name: string;
  age: number;
  gender: string;
  countries: string[];
  countryIds: string[];
  namePopularity: string[];
}
