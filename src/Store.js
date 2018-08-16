import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

export const Store = createStore(
    RootReducer,
    compose(middleware)
);