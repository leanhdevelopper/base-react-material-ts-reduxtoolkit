import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import {
  loadRootKeys,
  loadRootState,
  ORDER_BUDDY_STATE,
  removeStateStorage,
  saveRootKeys,
  saveRootState,
} from 'utils/localStorage';

const reducer = {
  home: homeReducer,
};

export function initStore() {

  const preloadedState = {};

  const preloadedKeys: any[] = loadRootKeys() || [];
  

  const store = configureStore({
    reducer,
    preloadedState: preloadedState ? preloadedState : {},
  });


  store.subscribe(() => {
    saveRootKeys(preloadedKeys);
    saveRootState(store.getState(), key);
  });
  return store;
}

export type Store = ReturnType<typeof initStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
