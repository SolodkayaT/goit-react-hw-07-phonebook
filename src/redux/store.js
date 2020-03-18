import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import logger from "redux-logger";
const getDefaultMD = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
  middleware: [...getDefaultMD, logger]
});
export default store;
