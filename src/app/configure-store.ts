import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
// @ts-ignore
import { createMiddleware } from 'redux-effects-middleware';

import { rootReducer } from './root-reducer';
import { initEffects } from './root-effects';

const middlewares = [createMiddleware(initEffects)];

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export function configureStore() {
  return {
    store,
  };
}
