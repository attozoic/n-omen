import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import initialState from "./initialState";
import createRootReducer from "./reducers";
import sagas from "./sagas";

declare global {
  // eslint-disable-next-line
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  const middleWares = [logger, sagaMiddleware, router];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const appReducer = createRootReducer(history);

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(sagas);

  if (module.hot)
    module.hot.accept("./reducers", () =>
      store.replaceReducer(createRootReducer(history))
    );

  return store;
};

export default { store: configureStore(), history };
