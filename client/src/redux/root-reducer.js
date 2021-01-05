import { combineReducers } from "redux";
//redux-persist configuration
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //importing Local Storage. import "sessionStorage" to use Session Storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]  //Firebase handles the storage of user, so we only will use cart
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);