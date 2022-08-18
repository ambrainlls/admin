import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JiraUserHistoriesType } from '../types';

const jiraMetricSlice = createSlice({
    name: 'jiraMetricSlice',
    initialState: {
        jiraUserHistories: [] as JiraUserHistoriesType[],
        jiraUserHistory: {} as JiraUserHistoriesType,
    },
    reducers: {
        setJiraUserHistories(state, action: PayloadAction<JiraUserHistoriesType[]>) {
            state.jiraUserHistories = action.payload;
        },
        setJiraUserHistory(state, action: PayloadAction<JiraUserHistoriesType>) {
            state.jiraUserHistory = action.payload;
        }
    }
});

export default jiraMetricSlice.reducer;
export const {
    setJiraUserHistories,
    setJiraUserHistory,
} = jiraMetricSlice.actions;