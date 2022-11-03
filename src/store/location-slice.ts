import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetails, getUserDetails } from "../rest-api/rest-api";
import { DetailsResponse } from "../rest-api/rest-api-types";
import { Status } from "../types";

export interface LocationState {
  userDetails: DetailsResponse | undefined;
  userStatus: Status;
  searchedDetails: DetailsResponse | undefined;
  searchedStatus: Status;
}

const initialState: LocationState = {
  userDetails: undefined,
  userStatus: Status.IDLE,
  searchedDetails: undefined,
  searchedStatus: Status.IDLE,
};

export const fetchLocationDetails = createAsyncThunk(
  "location/fetchLocationDetails",
  getDetails
);
export const fetchUserLocationDetails = createAsyncThunk(
  "location/fetchUserLocationDetails",
  getUserDetails
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocationDetails.fulfilled, (state, action) => {
      state.searchedStatus = Status.SUCCESS;
      state.searchedDetails = action.payload;
    });
    builder.addCase(fetchLocationDetails.pending, (state) => {
      state.searchedStatus = Status.PENDING;
    });
    builder.addCase(fetchLocationDetails.rejected, (state) => {
      state.searchedStatus = Status.FAILURE;
    });
    builder.addCase(fetchUserLocationDetails.fulfilled, (state, action) => {
      state.userStatus = Status.SUCCESS;
      state.userDetails = action.payload;
    });
    builder.addCase(fetchUserLocationDetails.pending, (state) => {
      state.userStatus = Status.PENDING;
    });
    builder.addCase(fetchUserLocationDetails.rejected, (state) => {
      state.userStatus = Status.FAILURE;
    });
  },
});

export const {} = locationSlice.actions;

export default locationSlice.reducer;
