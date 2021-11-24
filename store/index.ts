import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iCarData, iCarsState } from "shared/interfaces";

const initialState: iCarsState = {
    cars: []
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    saveCarsData: (state, {payload}: PayloadAction<iCarData[]>) => {
        state.cars = [...payload];
    }
  }
});

export const { saveCarsData } = carsSlice.actions;

export const store = configureStore({
  reducer: {cars: carsSlice.reducer}
});

export type RootState = ReturnType<typeof store.getState>;

