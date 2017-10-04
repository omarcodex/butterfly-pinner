import { applyMiddleware, createStore } from 'redux';
import butterflyPinnerApp from '../reducers/userReducers';
import logger from 'redux-logger';

let store = createStore(butterflyPinnerApp, applyMiddleware(logger));

export default store;
