import { AppState } from './types';
import { AppAction, ROUTE_GO } from './actions';

const initState: AppState = {
  route: '',
};

export function app(state: AppState = initState, action: AppAction): AppState {
  switch (action.type) {
    case ROUTE_GO: {
      const { route } = action;
      return {
        ...state,
        route,
      };
    }
    default:
      return state;
  }
}
