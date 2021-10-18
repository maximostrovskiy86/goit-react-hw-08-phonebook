import {combineReducers} from 'redux';
import types from './phonebook-types';

const items = (state = [], {type, payload}) => {

    const isContactExist = () => {
        alert(`${payload.name} is already in contacts.`)
        return [...state];
    }

    switch (type) {
        case types.ADD:
            console.log(payload)
            const isFind = state.some(item => item.name.toLowerCase() === payload.name.toLowerCase());
            return  isFind ?  isContactExist() : [...state, payload];
        case types.DELETE:
            return state.filter(contact => contact.id !== payload);
        default:
            return state;
    }
}

const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
    items,
    filter,
})