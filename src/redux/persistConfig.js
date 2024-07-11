import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {loginReducer} from "./slices/LoginSlice"; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'token', 'refreshToken'] 
};

const rootReducer = combineReducers({
    login: loginReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
