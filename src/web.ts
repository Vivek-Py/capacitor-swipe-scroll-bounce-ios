import { WebPlugin } from '@capacitor/core';

import type { CapacitorSwipeScrollBounceIosPlugin } from './definitions';

export class CapacitorSwipeScrollBounceIosWeb extends WebPlugin implements CapacitorSwipeScrollBounceIosPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('LOGGING OPTIONS', options);
    return options;
  }
}
