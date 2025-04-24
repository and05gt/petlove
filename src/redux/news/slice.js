import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations.js";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    changePageNext: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    changePageBack: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    changePageFirst: (state) => {
      state.page = 1;
    },
    changePageLast: (state) => {
      state.page = state.totalPages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page > 1) {
          state.news = [...state.news, ...action.payload.results];
        } else {
          state.news = action.payload.results;
        }
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  changePageNext,
  changePageBack,
  changePageFirst,
  changePageLast,
} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
