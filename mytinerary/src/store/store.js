import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/reducerFetchCities';
import itinerariesReducer from './reducers/reduceFetchItineraries';
import reducerAuth from './reducers/reducerAuth';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    authStore: reducerAuth
  },
});


export default store;