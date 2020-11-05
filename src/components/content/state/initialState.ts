import { ContentState } from './types';

const initialState: ContentState = {
  isLoading: true,
  error: null,
  nameInfo: {
    name: null,
    age: null,
    gender: null,
    countries: [],
    countryIds: [],
    namePopularity: []
  }
};

export default initialState;
