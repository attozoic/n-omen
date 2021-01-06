import { ContentState } from './types';

const initialState: ContentState = {
  isLoading: false,
  mobileOpen: false,
  firstSearchDone: false,
  haveContent: false,
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
