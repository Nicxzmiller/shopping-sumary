//import createStore and apply middleware
import { createStore, applyMiddleware, compose } from 'redux';
//import thunk
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtention ? window.devToolsExtention() : f => f

    )
);

export default store;