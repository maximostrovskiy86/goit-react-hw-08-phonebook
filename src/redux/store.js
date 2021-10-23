import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./phonebook/phonebook-reducer";
import authReducer from './auth/auth-redusers';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    // logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});


const persistor = persistStore(store);

const state = {
    store,
    persistor,
}

export default state;
