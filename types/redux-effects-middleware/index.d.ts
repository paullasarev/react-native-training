declare module 'redux-effects-middleware' {
  import { Middleware, Action } from 'redux';

  type EffectHandler<S> = (effects: Effects<S>, action: Action) => void;

  type ISelector<S, T> = (selector: (state: S) => T) => T;

  interface Effects<S> {
    takeEvery: (actionType: string, handler: EffectHandler<S>) => void;
    take: (actionTypes: string[]) => Promise<Action>;
    dispatch: (...args: any) => Promise<any>;
    select: ISelector<S, any>;
  }

  export function createMiddleware<S>(
    initEffects: (effects: Effects<S>) => void,
    options?: any,
  ): Middleware;
}
