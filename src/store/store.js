import {compose , createStore , applyMiddleware} from 'redux';
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';

const persistConfig = {
    key : 'root',
    storage,
    whitelists : [],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    logger,
    sagaMiddleware,
]

const composedEnhancer = compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer , undefined , composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persitor = persistStore(store);