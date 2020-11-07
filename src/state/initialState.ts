import content from '../components/content/state/initialState';
import { ContentState } from '../components/content/state/types';

export type AppState = {
  content: ContentState;
};

const initialState = {
  content
};

export default initialState;
