import axios from 'axios';
import authActions from './auth-actions';

const baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post(baseURL + '/users/signup', credentials);
        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data));
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
};

const logIn = credentials => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post(baseURL + '/users/login', credentials);
        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    }
};

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post(baseURL + '/users/logout');
        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
};

// const getCurrentUser = createAsyncThunk(
//     'auth/refresh',
//     async ( _, thunkAPI) => {
//         const state = thunkAPI.getState();
//         const token = state.auth.token;
//         if (token === null) {
//             console.log("Токена нет!!!")
//             return;
//         }
//
//         token.set(token);
//         try {
//             const response = await axios.get(baseURL + '/users/current');
//             // dispatch(authActions.getCurrentUserSuccess(response.data));
//             return response.data;
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// )

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: {token: persistedToken},
    } = getState();

    if (!persistedToken) {
        return;
    }

    dispatch(authActions.getCurrentUserRequest());
    token.set(persistedToken);

    try {
        const response = await axios.get(baseURL + '/users/current');
        dispatch(authActions.getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
};

const operations = {
    register,
    logIn,
    logOut,
    getCurrentUser,
}

export default operations;