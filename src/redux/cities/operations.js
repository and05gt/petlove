import { createAsyncThunk } from "@reduxjs/toolkit";
import { petloveApi } from "../users/operations.js";

export const fetchCities = createAsyncThunk(
  "cities/getCities",
  async (_, thunkAPI) => {
    try {
      const { data } = await petloveApi.get("/cities/locations");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCitiesByKeyword = createAsyncThunk(
  "cities/getCitiesByKeyword",
  async (keyword, thunkAPI) => {
    try {
      const { data } = await petloveApi.get(`/cities/?keyword=${keyword}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
