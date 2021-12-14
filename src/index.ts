import { registerPlugin } from '@capacitor/core';

import type { CapacitorSwipeScrollBounceIosPlugin } from './definitions';

const CapacitorSwipeScrollBounceIos = registerPlugin<CapacitorSwipeScrollBounceIosPlugin>('CapacitorSwipeScrollBounceIos', {
  web: () => import('./web').then(m => new m.CapacitorSwipeScrollBounceIosWeb()),
});

export * from './definitions';
export { CapacitorSwipeScrollBounceIos };
