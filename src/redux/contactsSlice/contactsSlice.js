import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from '../../data.json';

const contactState = { phones: [...data] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.phones.includes(action.payload.number)) return;
        state.phones.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            ...value,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.phones.findIndex(task => task.id === action.payload);
      state.phones.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
