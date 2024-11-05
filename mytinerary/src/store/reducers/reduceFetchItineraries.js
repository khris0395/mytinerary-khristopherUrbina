import { createReducer } from '@reduxjs/toolkit';
import { fetchItineraries } from '../actions/actionFetchItineraries';

const initialState = {
  itineraries: [],
  loading: false,
  error: null,
};

const itinerariesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchItineraries.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchItineraries.fulfilled, (state, action) => {
      state.loading = false; 
      state.itineraries = action.payload;
    })
    .addCase(fetchItineraries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default itinerariesReducer;