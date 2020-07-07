import { CommonActions } from '@react-navigation/native';
import { noop } from 'lodash';

import { Effects } from 'redux-effects-middleware';
import { Action } from 'redux';
import { StoreState } from '../app/types';
import { ROUTE_GO, RouteGoAction } from '../app/actions';

// export class Navigation {
//   init = (ref) => {
//     this._navigator = ref;
//   };
//
//   getNavigator = () => this._navigator;
//
//   go = (name, params) => {
//     const action = CommonActions.navigate({
//       name,
//       params,
//     });
//
//     this.getNavigator().dispatch(action);
//   };
//
//   back = () => {
//     const action = CommonActions.goBack();
//     this.getNavigator().dispatch(action);
//   };
// }

let topNavigator: any = {
  dispatch: noop,
};

export function initNavigation(ref: any) {
  topNavigator = ref;
}

export const go = (name: string, params: object = {}) => {
  const action = CommonActions.navigate({
    name,
    params,
  });

  topNavigator.dispatch(action);
};

export const back = () => {
  const action = CommonActions.goBack();
  topNavigator.dispatch(action);
};

function onRouteGo(effects: Effects<StoreState>, action: Action) {
  const { route, params } = action as RouteGoAction;
  go(route, params);
}

export function navigationEffects(effects: Effects<StoreState>) {
  effects.takeEvery(ROUTE_GO, onRouteGo);
}
