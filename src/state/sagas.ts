import { all } from "redux-saga/effects";
import content from "../components/content/state/sagas";

export default function* () {
  yield all([content()]);
}
