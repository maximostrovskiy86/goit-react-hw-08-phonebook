import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const items = createReducer([], {
    [actions.addContact]: (state, {payload}) => {
        const isFind = state.some(item => item.name.toLowerCase() === payload.name.toLowerCase());

        const isContactExist = () => {
            alert(`${payload.name} is already in contacts.`);
            return [...state];
        }

        return isFind ? isContactExist() : [...state, payload];
    },
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items,
    filter,
});