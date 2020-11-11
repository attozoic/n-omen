interface Country {
  // eslint-disable-next-line camelcase
  country_id: string;
  probability: number;
}

export interface Nationalize {
  name: string;
  country: Country[];
}

export interface Genderize {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

export interface Agify {
  name: string;
  age: number;
  count: number;
}
