import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middlewares)
);

export default configureStore;