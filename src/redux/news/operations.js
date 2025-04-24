import { createAsyncThunk } from "@reduxjs/toolkit";
import { petloveApi } from "../users/operations.js";

export const fetchNews = createAsyncThunk(
  "news/getNews",
  async ({ query, page }, thunkAPI) => {
    try {
      const { data } = await petloveApi.get(
        `/news?keyword=${query}&page=${page}&limit=6`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
