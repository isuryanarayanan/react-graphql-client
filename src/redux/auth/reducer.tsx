import { createSlice } from "@reduxjs/toolkit";
import authState from "./state";

function initialState(): authState {
  return {
    authenticated: false,
    user: {
      id: undefined,
      username: null,
      email: null,
      createdAt: null,
    },
    token: null,
  };
}

export const moduleName = "auth";

export const authSlice = createSlice({
  name: moduleName,
  initialState: initialState(),
  reducers: {
    post_login: (state, action) => {
      state.authenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    post_logout: (state) => {
      state.authenticated = false;
      state.user = {
        id: undefined,
        username: null,
        email: null,
        createdAt: null,
      };
      state.token = null;
    },
  },
});
