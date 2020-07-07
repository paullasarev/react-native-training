import { Effects } from 'redux-effects-middleware';

import { navigationEffects } from '../navigation/Navigation';
import { StoreState } from './types';

export function initEffects(effects: Effects<StoreState>) {
  navigationEffects(effects);
}
