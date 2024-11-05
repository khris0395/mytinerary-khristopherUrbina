import { createReducer } from '@reduxjs/toolkit';
import { fetchCities } from '../actions/actionFetchCities'; 

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCities.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.loading = false; 
      state.cities = action.payload;
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default citiesReducer;
