import { CommonActions } from '@react-navigation/native';
import { noop } from 'lodash';

import { Effects } from 'redux-effects-middleware';
import { Action } from 'redux';
import { Route } from '@react-navigation/routers';
import { StoreState } from '../app/types';
import { ROUTE_BACK, ROUTE_GO, RouteGoAction } from '../app/actions';

let topNavigator: any = {
  dispatch: noop,
};

function onNavigationEvent(event: any) {
  // console.log('onNavigationEvent', event)
}

export function initNavigation(ref: any) {
  topNavigator = ref;
  // console.log('initNavigation', ref)
  if (topNavigator) {
    // console.log('addListener')
    topNavigator.addListener('focus', onNavigationEvent);
  }
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

export function getCurrentRoute(): Route<string> | undefined {
  return topNavigator.getCurrentRoute();
}

function onRouteGo(effects: Effects<StoreState>, action: Action) {
  const { route, params } = action as RouteGoAction;
  go(route, params);
}

function onRouteBack(effects: Effects<StoreState>, action: Action) {
  back();
}

export function navigationEffects(effects: Effects<StoreState>) {
  effects.takeEvery(ROUTE_GO, onRouteGo);
  effects.takeEvery(ROUTE_BACK, onRouteBack);
}
