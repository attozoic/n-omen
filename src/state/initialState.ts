import content from '../components/content/state/initialState';
import locations from '../components/locations/state/initialState';
import { ContentState } from '../components/content/state/types';
import { LocationsState } from '../components/locations/state/types';

export type AppState = {
  content: ContentState;
  locations: LocationsState;
};

const initialState = {
  content,
  locations
};

export default initialState;
