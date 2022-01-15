import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, changeFilter } from './actions';

const items = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [removeContact.type]: (state, { payload }) => {
    const removingContact = state.find(contact => contact.name === payload);
    state.splice(state.indexOf(removingContact), 1);

    return [...state];
  },
});

const filter = createReducer('', {
  [changeFilter.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
