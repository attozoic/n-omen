import { combineReducers } from 'redux';
import content from '../components/content/state/reducers';
import locations from '../components/locations/state/reducers';

const rootReducer = combineReducers({
  content,
  locations
});

export default rootReducer;
