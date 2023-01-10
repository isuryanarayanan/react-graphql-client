import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../reducer";

export const register = createAsyncThunk(
  moduleName + "/register",
  async (payload: { username: string; password: string; email: string }) => {
    console.log("payload", payload);
  }
);
