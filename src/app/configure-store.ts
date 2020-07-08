import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
// @ts-ignore
import { createMiddleware } from 'redux-effects-middleware';

import { rootReducer } from './root-reducer';
import { initEffects } from './root-effects';
import reactotron from './ReactotronConfig';

const middlewares = [createMiddleware(initEffects)];

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}

let enhancer = applyMiddleware(...middlewares);
if (reactotron) {
  enhancer = compose(enhancer, reactotron.createEnhancer());
}
const store = createStore(rootReducer, enhancer);

export function configureStore() {
  return {
    store,
  };
}
