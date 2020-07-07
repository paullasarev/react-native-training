import { Reducer } from 'redux';
import combineSectionReducers from 'combine-section-reducers';

import { StoreState } from './types';
import { app } from './reducer';

export const rootReducer: Reducer<StoreState> = combineSectionReducers({
  app,
});
