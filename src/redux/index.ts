import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import thunk from 'redux-thunk';
import leftDrawerSlice from './slice/leftDrawerSlice';
import employeesSlice from './slice/employeesSlice';
import contactUsSlice from './slice/contactUsSlice';
import resumeSlice from './slice/resumeSlice';
import feedbackSlice from './slice/feedbackSlice';
import projectSlice from './slice/projectSlice';
import jiraMetricSlice from './slice/jiraMetricSlice';
import gitMetricSlice from './slice/gitMetricSlice';
import metricSlice from './slice/metricSlice';
import searchParamsSlice from './slice/SearchParamsSlice';
import jobsSlice from './slice/jobsSlice';

enableMapSet();

const rootReducer = combineReducers({
    leftDrawerReducer: leftDrawerSlice,
    employeesReducer: employeesSlice,
    contactUsReducer: contactUsSlice,
    resumeReducer: resumeSlice,
    feedbackReducer: feedbackSlice,
    projectReducer: projectSlice,
    jiraMetricReducer: jiraMetricSlice,
    gitMetricReducer: gitMetricSlice,
    metricReducer: metricSlice,
    searchParamsReducer: searchParamsSlice,
    jobsReducer: jobsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>
