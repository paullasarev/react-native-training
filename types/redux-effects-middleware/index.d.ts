declare module 'redux-effects-middleware' {
  import { Middleware, Action } from 'redux';

  type EffectHandler<S> = (effects: Effects<S>, action: Action) => void;

  type ISelector<S, T> = (selector: (state: S) => T) => T;
  type ActionsTypeList = string[];
  type ActionsPattern = string | ActionsTypeList;

  interface Effects<S> {
    takeEvery: (actionType: string, handler: EffectHandler<S>) => void;
    take: (actionTypes: ActionsPattern) => Promise<Action>;
    dispatch: (...args: any) => Promise<any>;
    select: ISelector<S, any>;
    delay: (timeout: number, payload: any, ...args: any) => Promise<any>;

    throttle: (
      timeout: number,
      pattern: ActionsPattern,
      handler: EffectHandler<S>,
      ...args: any
    ) => void;
    debounce: (
      timeout: number,
      pattern: ActionsPattern,
      handler: EffectHandler<S>,
      ...args: any
    ) => void;

    all: (actions: ActionsTypeList) => Promise<Action[]>;
    race: (actions: ActionsTypeList) => Promise<Action>;
  }

  export function createMiddleware<S>(
    initEffects: (effects: Effects<S>) => void,
    options?: any,
  ): Middleware;
}
