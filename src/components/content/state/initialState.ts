import { ContentState, NameInfo } from "./types";

const initialState: ContentState = {
  isBusy: true,
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
