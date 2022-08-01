import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import thunk from 'redux-thunk';
import leftDrawerSlice from './slice/leftDrawerSlice';
import createDeveloperModalSlice from "./slice/createDeveloperModalSlice";

enableMapSet();

const rootReducer = combineReducers({
    leftDrawerReducer: leftDrawerSlice,
    createDeveloperModalReducer: createDeveloperModalSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>
