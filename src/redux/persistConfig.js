import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { LoginSlice } from "./slices/LoginSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login']
};

const rootReducer = combineReducers({
    login: LoginSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;