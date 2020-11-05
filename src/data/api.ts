import { NameInfo } from '../components/content/state/types';

export default async (): Promise<NameInfo> =>
  Promise.resolve({
    age: 44,
    countries: ['RS', 'HR', 'DE'],
    countryIds: ['RS', 'HR', 'DE'],
    gender: 'male',
    name: 'John',
    namePopularity: []
  });
