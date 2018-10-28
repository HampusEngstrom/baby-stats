import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";

export function getDefaultMiddleware(thunkInjection) {
  return [thunk.withExtraArgument(thunkInjection)];
}

export function configureStore(options = {}) {
  const {
    reducer,
    thunkInjection,
    middleware = getDefaultMiddleware(thunkInjection),
    devTools = true,
    preloadedState,
    enhancers = []
  } = options;

  let rootReducer;

  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error(
      "Reducer argument must be a function or an object of functions that can be passed to combineReducers"
    );
  }

  const middlewareEnhancer = applyMiddleware(...middleware);

  const storeEnhancers = [middlewareEnhancer, ...enhancers];

  const finalCompose = devTools ? composeWithDevTools : compose;

  const composedEnhancer = finalCompose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
