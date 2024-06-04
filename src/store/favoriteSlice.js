import { createSlice } from "@reduxjs/toolkit";

// Fetch the initial state from local storage if it exists
const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    put(state, action) {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      // Save updated state to local storage
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    remove(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      // Save updated state to local storage
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { put, remove } = favoriteSlice.actions;
export default favoriteSlice.reducer;
