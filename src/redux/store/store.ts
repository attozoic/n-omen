import { createStore, combineReducers } from "redux";
import coordsReducer from "../coords/reducers";
import nameInfoReducer from "../name-info/reducers";

const rootReducer = combineReducers({
  nameInfo: nameInfoReducer,
  coords: coordsReducer
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
