import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
    name: null,
    email: null,
    isLogIn: false,
    isFetchingCurrentUser: false,
};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, {payload}) => ({
        ...payload.user,
        isLogIn: true,
    }),
    [authActions.loginSuccess]: (_, {payload}) => ({
        ...payload.user,
        isLogIn: true,
    }),
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, {payload}) => ({
        ...payload,
        isLogIn: true,
    }),
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, {payload}) => payload.token,
    [authActions.loginSuccess]: (_, {payload}) => payload.token,
    [authActions.logoutSuccess]: () => null,
})

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
});


export default combineReducers({
    user,
    token,
    error,
});

