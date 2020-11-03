import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import content from "../components/content/state/reducers";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    content
  });
