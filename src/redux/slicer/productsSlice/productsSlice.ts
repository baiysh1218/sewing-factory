import { createSlice } from "@reduxjs/toolkit";
import { nameProductsSlicer } from "../../../utils/consts";
import { IProductsState } from "./types";

const initialState: IProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: nameProductsSlicer,
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
