import { ContentState } from './types';

const initialState: ContentState = {
  isLoading: true,
  mobileOpen: false,
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
