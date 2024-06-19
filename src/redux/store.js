import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cart-slice";

export let store = configureStore({
  reducer: {
    products: productSlice,
    cart:cartSlice,
  },
});
