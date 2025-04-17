import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const petloveApi = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
});

const setAuthHeader = (token) => {
  petloveApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  petloveApi.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petloveApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petloveApi.post("/users/signin", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await petloveApi.post("/users/signout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
