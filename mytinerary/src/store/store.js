import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/reducerFetchCities';
import itinerariesReducer from './reducers/reduceFetchItineraries';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer
  },
});


export default store;