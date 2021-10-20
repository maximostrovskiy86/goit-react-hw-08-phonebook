import {createAction} from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction('contact/deleteContactRequest');
export const deleteContactSuccess = createAction('contact/deleteContactSuccess');
export const deleteContactError = createAction('contact/deleteContactError');

export const changeFilter = createAction('contact/changeFilter');