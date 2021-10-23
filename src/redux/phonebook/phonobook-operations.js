import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactSuccess,
    fetchContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const {data} = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
}

const addContact = user => dispatch => {
    dispatch(addContactRequest());

    axios
        .post('/contacts', user)
        .then(user => {
            dispatch(addContactSuccess(user.data))
        })
        .catch(error => dispatch(addContactError(error)))
}

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => {
            dispatch(deleteContactSuccess(id))
        })
        .catch(error => dispatch(deleteContactError(error)));
}

const operations = {
    fetchContacts,
    addContact,
    deleteContact,
}

export default operations;


