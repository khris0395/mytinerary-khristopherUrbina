import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCities = createAsyncThunk(

  "FETCH_CITIES",
  async (searchName) => {

      const response = await fetch(`http://localhost:8080/api/cities/allCities?name=${searchName}`);
      const data = await response.json();
      return data.response; 

  }
);

