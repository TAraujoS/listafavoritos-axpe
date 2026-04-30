import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import logger from 'store/middlewares/logger';
import rootReducer from './modules/rootReducers';

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      process.env.NODE_ENV === 'production'
        ? getDefaultMiddleware().concat(thunk)
        : getDefaultMiddleware().concat(logger, thunk),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const wrapper = createWrapper(makeStore);