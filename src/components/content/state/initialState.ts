import { ContentState } from './types';

const initialState: ContentState = {
  isLoading: true,
  error: null,
  nameInfo: {
    name: null,
    age: null,
    maleShare: null,
    countries: [],
    countryIds: []
  }
};

export default initialState;
