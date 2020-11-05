import { all } from 'redux-saga/effects';
import content from '../components/content/state/sagas';

export default function* sagas(): Generator {
  yield all([content()]);
}
