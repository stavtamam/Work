import { Store, StoreConfig } from '@datorama/akita';

export interface AppState {
  token: string;
  name: string;
}

export function createInitialState(): AppState {
  return {
    token: '',
    name: ''
  };
}

@StoreConfig({ name: 'session' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}
