import { createStore, combineReducers } from 'redux';
import usersReducer from './Reducers/usersReducer';

// Combine reducers
const rootReducer = combineReducers({
    users: usersReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
