import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import store from "./redux/store";
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store.store}>
            <PersistGate loading={<h2>...loading</h2>} persistor={store.persistor}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);