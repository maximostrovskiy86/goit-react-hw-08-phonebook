import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import contactsReducer from "./phonebook-reducer";

// const initialState = {
//     contacts: {
//         items: [],
//         filter: ''
//     }
// }
// const reducer = (state = initialState, {type, payload}) => state;
const rootReducer = combineReducers({
    contacts: contactsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
