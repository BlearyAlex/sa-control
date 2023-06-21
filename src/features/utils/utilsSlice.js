import { createSlice } from '@reduxjs/toolkit';

export const utilSlice = createSlice({
  name: 'utils',
  initialState: {
    modal: false,
  },
  reducers: {
    handleModal: (state, { payload }) => {
      state.modal = payload;
    },
  },
});

export const { handleModal } = utilSlice.actions;
