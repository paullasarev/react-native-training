import { AppState } from './types';
import { AppAction } from './actions';

const initState: AppState = {
  route: '',
};

export function app(state: AppState = initState, action: AppAction): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
