import { Action } from 'redux';

export const ROUTE_GO = 'ROUTE_GO';
export interface RouteGoAction extends Action {
  type: typeof ROUTE_GO;
  route: string;
  params?: object;
}

export function routeGoAction(route: string, params?: object): RouteGoAction {
  return {
    type: ROUTE_GO,
    route,
    params,
  };
}

export const ROUTE_BACK = 'ROUTE_BACK';
export interface RouteGoBackAction extends Action {
  type: typeof ROUTE_BACK;
}

export function routeGoBackAction(): RouteGoBackAction {
  return {
    type: ROUTE_BACK,
  };
}

export type AppAction = RouteGoAction | RouteGoBackAction;
