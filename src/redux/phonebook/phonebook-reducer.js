import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from "./phonebook-actions";

const items = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => {
        return [...state, payload];
    },
    [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
});

export default combineReducers({
    items,
    filter,
    loading,
});