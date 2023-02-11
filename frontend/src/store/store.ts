import { configureStore } from '@reduxjs/toolkit';
import { GlobalENV } from '@/types';

export const store = configureStore({
  reducer: {},
  devTools: GlobalENV.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
