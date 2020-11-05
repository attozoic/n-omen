import { combineReducers } from 'redux';
import content from '../components/content/state/reducers';

const rootReducer = combineReducers({
  content
});

export default rootReducer;
