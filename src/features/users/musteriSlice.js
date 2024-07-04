import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const musteriSlice = createSlice({
  name: 'users',
  initialState: {
    musteriler: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.musteriler = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiSlice.endpoints.getMusteriler.matchFulfilled,
        (state, action) => {
          state.musteriler = action.payload;
          state.status = 'succeeded';
        }
      )
      .addMatcher(
        apiSlice.endpoints.getMusteriler.matchPending,
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        apiSlice.endpoints.getMusteriler.matchRejected,
        (state, action) => {
          state.status = 'failed';
          state.error = action.error;
        }
      )
      .addMatcher(
        apiSlice.endpoints.addMusteri.matchFulfilled,
        (state, action) => {
          state.musteriler.push(action.payload);
        }
      );
  },
});

export const { setMusteriler } = musteriSlice.actions;

export default musteriSlice.reducer;
