import { createSlice } from "@reduxjs/toolkit";
import { nameLanguageSlicer } from "../../../utils/consts";

const initialState = localStorage.getItem("language") || "ru";

const languageSlice = createSlice({
  name: nameLanguageSlicer,
  initialState,
  reducers: {
    // changeLanguage
    changeLanguage: (state, { payload }) => {
      localStorage.setItem("language", payload);
      return payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
