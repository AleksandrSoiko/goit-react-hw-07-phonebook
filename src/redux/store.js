import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

export let store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
