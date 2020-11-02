import { UPDATE_INFO, NameInfo, NameInfoAction } from "./types";

const defaultState: NameInfo = {
  name: null,
  age: null,
  gender: null,
  countries: [],
  countryIds: [],
  namePopularity: []
};

const nameInfoReducer = (
  state = defaultState,
  action: NameInfoAction
): NameInfo => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        ...state,
        name: action.payload.name,
        countries: action.payload.countries,
        age: action.payload.age,
        gender: action.payload.gender,
        countryIds: action.payload.countryIds,
        namePopularity: action.payload.namePopularity
      };
    }
    default:
      return state;
  }
};

export default nameInfoReducer;
