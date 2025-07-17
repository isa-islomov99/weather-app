import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// thunk
import { weatherThunk } from "../thunks/weatherThunks";

// type
import type { WeatherState } from "../../types/storeTypes";

const initialState: WeatherState = {
  currentWeather: null,
  isLoading: false,
  error: null,
  searchQuery: "",
  selectedLocation: "Tashkent",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(weatherThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(weatherThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentWeather = action.payload;
        state.selectedLocation = action.payload.name;
      })
      .addCase(weatherThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, setSelectedLocation, clearError } =
  weatherSlice.actions;
export default weatherSlice.reducer;
