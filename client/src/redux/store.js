import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// //redux thunk - Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
// import thunk from "redux-thunk";
//redux persist for managing local storage or session storage. to save cart state
import { persistStore } from 'redux-persist';

//using redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
