import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItineraries = createAsyncThunk(

  "FETCH_ITINERARIES",
  async (city) => {

      const response = await fetch(`http://localhost:8080/api/itineraries/allByCity/${city}`);
      const data = await response.json();
      return data.response; 

  }
);
