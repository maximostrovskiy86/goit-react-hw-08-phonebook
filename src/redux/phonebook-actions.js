import types from './phonebook-types';

const addContact = (user) => ({
    type: types.ADD,
    payload: user,
})

const deleteContact = (id) => ({
    type: types.DELETE,
    payload: id,
})

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
})

export default {addContact, deleteContact, changeFilter}