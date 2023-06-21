import { configureStore } from '@reduxjs/toolkit';

import { utilSlice } from '../features/utils/utilsSlice';

export const store = configureStore({
  reducer: {
    utils: utilSlice.reducer,
  },
});
