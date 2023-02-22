import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import getRandomNumber from "./initializeAPI";

export interface InitializeState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: InitializeState = {
  value: 0,
  status: "idle",
};

export const randomNumberAsync = createAsyncThunk(
  "initialize/getRandomNumber",
  async () => {
    const response = await getRandomNumber();

    return response;
  }
);

export const initializeSlice = createSlice({
  name: "initialize",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(randomNumberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(randomNumberAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(randomNumberAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const randomNumber = initializeSlice;
export const selectNumber = (state: RootState) => state.initialize.value; //coger el valor
export const selectStatus = (state: RootState) => state.initialize.status;

export default initializeSlice.reducer;
