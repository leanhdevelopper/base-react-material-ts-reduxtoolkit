import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const reducer = {};

export function initStore() {
  const store = configureStore({
    reducer,
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
