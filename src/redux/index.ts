import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import thunk from 'redux-thunk';
import mpSlice from './slice/slice';

enableMapSet();

const rootReducer = combineReducers({
    mainReducer: mpSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>
