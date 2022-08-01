import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import thunk from 'redux-thunk';
import leftDrawerSlice from './slice/leftDrawerSlice';
import employeesSlice from './slice/employeesSlice';
import contactUsSlice from './slice/contactUsSlice';
import resumeSlice from './slice/resumeSlice';
import feedbackSlice from './slice/feedbackSlice';
import createEmployeeModalSlice from './slice/createEmployeeModalSlice';

enableMapSet();

const rootReducer = combineReducers({
    leftDrawerReducer: leftDrawerSlice,
    employeesReducer: employeesSlice,
    contactUsReducer: contactUsSlice,
    resumeReducer: resumeSlice,
    feedbackReducer: feedbackSlice,
    createEmployeeModalReducer: createEmployeeModalSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>
