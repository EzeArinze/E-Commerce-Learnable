// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { productsApi } from "../services/products";
// import cartSlice from "./cartSlice";
// import favoriteSlice from "./favoriteSlice";
// import productSlice from "./productSlice";
// import productDetailReducer from "./productDetailSlice";

// const store = configureStore({
//   reducer: {
//     [productsApi.reducerPath]: productsApi.reducer,
//     cart: cartSlice,
//     favorite: favoriteSlice,
//     products: productSlice,
//     productDetail: productDetailReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });

// setupListeners(store.dispatch);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../services/products";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import productSlice from "./productSlice";
import productDetailReducer from "./productDetailSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice,
    favorite: favoriteSlice,
    products: productSlice,
    productDetail: productDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Subscribe to store updates to persist the favorite slice to local storage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("favorites", JSON.stringify(state.favorite));
});

setupListeners(store.dispatch);

export default store;
