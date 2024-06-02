import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImageIndex: 0,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setCurrentImageIndex(state, action) {
      state.currentImageIndex = action.payload;
    },
    nextImage(state, action) {
      const imagesLength = action.payload;
      state.currentImageIndex = (state.currentImageIndex + 1) % imagesLength;
    },
    prevImage(state, action) {
      const imagesLength = action.payload;
      state.currentImageIndex =
        state.currentImageIndex === 0
          ? imagesLength - 1
          : state.currentImageIndex - 1;
    },
  },
});

export const { setCurrentImageIndex, nextImage, prevImage } =
  productDetailSlice.actions;
export default productDetailSlice.reducer;
