export interface AppState {
  route: string;
}

export type StoreState = {
  app: AppState;
};

export const appSelector = (state: StoreState) => state.app;
