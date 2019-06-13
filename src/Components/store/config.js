import {
    createStore, 
    compose, 
    applyMiddleware
} from 'redux';

import { createReducers } from './reducers';

import promiseMiddleware from 'redux-promise';

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE || compose;               
};

const configStore = () => {
    return createStore(createReducers, reduxCompose(
        applyMiddleware(promiseMiddleware)
    ));
};

export default configStore;