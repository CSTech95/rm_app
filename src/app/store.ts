import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { characterApi } from '../features/character/characterSlice';
import counterReducer from '../features/counter/counterSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myCharacters: sidebarReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
