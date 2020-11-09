import { NameInfo } from '../components/content/state/types';

export default async (): Promise<NameInfo> =>
  Promise.resolve({
    age: 44,
    countries: [{ countryName: 'Serbia', namePopularity: 0.08787 }],
    countryIds: ['RS', 'HR', 'DE'],
    maleShare: 22,
    name: 'John'
  });
