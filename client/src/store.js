import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './reducers/loginReducer';
import thunk from 'redux-thunk';

const reducers = {
    loginReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));