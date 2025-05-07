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
  "users/registerUser",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petloveApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("Invalid request body!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      if (error.status === 409) {
        return thunkAPI.rejectWithValue("User already exists!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await petloveApi.post("/users/signin", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("Invalid request body!");
      }
      if (error.status === 401) {
        return thunkAPI.rejectWithValue("Invalid email or password!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    await petloveApi.post("/users/signout");
    clearAuthHeader();
  } catch (error) {
    if (error.status === 401) {
      return thunkAPI.rejectWithValue("User unauthorized!");
    }
    if (error.status === 404) {
      return thunkAPI.rejectWithValue("Not found service!");
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "users/refreshUser",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.get("/users/current");
      return data;
    } catch (error) {
      if (error.status === 401) {
        return thunkAPI.rejectWithValue("User unauthorized!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.get("/users/current/full");
      return data;
    } catch (error) {
      if (error.status === 401) {
        return thunkAPI.rejectWithValue("User unauthorized!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.patch("/users/current/edit", userData);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("Invalid request body!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      if (error.status === 409) {
        return thunkAPI.rejectWithValue("User already exists!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserPet = createAsyncThunk(
  "users/addUserPet",
  async (pet, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.post("/users/current/pets/add", pet);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("Invalid request body!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found service!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  "users/deleteUserPet",
  async (petId, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.delete(
        `/users/current/pets/remove/${petId}`
      );
      console.log("Deleted pet:", data);

      return data.pets;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("This id is not valid!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("Not found pet!");
      }
      if (error.status === 409) {
        return thunkAPI.rejectWithValue("You aren't owner of this pet!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getViewedNotice = createAsyncThunk(
  "users/getViewedNotice",
  async (noticeId, thunkAPI) => {
    const savedToken = thunkAPI.getState().users.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("No valid token");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await petloveApi.get(`/notices/${noticeId}`);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkAPI.rejectWithValue("This id is not valid!");
      }
      if (error.status === 404) {
        return thunkAPI.rejectWithValue("This notice is not found in notices!");
      }
      if (error.status === 409) {
        return thunkAPI.rejectWithValue("This notice is already in viewed!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
