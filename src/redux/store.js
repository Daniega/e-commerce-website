import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//redux persist for managing local storage or session storage. to save cart state
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };