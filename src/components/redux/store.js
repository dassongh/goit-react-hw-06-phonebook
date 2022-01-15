import contactsReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
