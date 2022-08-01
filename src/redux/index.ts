import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import thunk from 'redux-thunk';
import leftDrawerSlice from './slice/leftDrawerSlice';
import developersSlice from './slice/developersSlice';
import contactUsSlice from './slice/contactUsSlice';
import resumeSlice from './slice/resumeSlice';
import feedbackSlice from './slice/feedbackSlice';
import createDeveloperModalSlice from './slice/createDeveloperModalSlice';

enableMapSet();

const rootReducer = combineReducers({
    leftDrawerReducer: leftDrawerSlice,
    developersReducer: developersSlice,
    contactUsReducer: contactUsSlice,
    resumeReducer: resumeSlice,
    feedbackReducer: feedbackSlice,
    createDeveloperModalReducer: createDeveloperModalSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>
