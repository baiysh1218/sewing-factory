import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../slicer/languageSlice/languageSlice";
import productsSlice from "../slicer/productsSlice/productsSlice";

const store = configureStore({
  reducer: { products: productsSlice, language: languageSlice },
});

export default store;
