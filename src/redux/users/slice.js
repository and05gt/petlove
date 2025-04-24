import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addUserPet,
  deleteUserPet,
  getCurrentUser,
  logIn,
  logOut,
  registerUser,
  updateUser,
} from "./operations.js";

const initialState = {
  user: { name: null, email: null, phone: null, avatar: null, pets: [] },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(addUserPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets;
      })
      .addCase(deleteUserPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets;
      })
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          logIn.pending,
          getCurrentUser.pending,
          updateUser.pending,
          addUserPet.pending,
          deleteUserPet.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.fulfilled,
          logIn.fulfilled,
          getCurrentUser.fulfilled,
          updateUser.fulfilled,
          addUserPet.fulfilled,
          deleteUserPet.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          logIn.rejected,
          getCurrentUser.rejected,
          updateUser.rejected,
          addUserPet.rejected,
          deleteUserPet.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
