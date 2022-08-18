import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GitUserHistoriesType } from '../types';

const gitMetricSlice = createSlice({
    name: 'gitMetricSlice',
    initialState: {
        gitUserHistories: [] as GitUserHistoriesType[],
        gitUserHistory: {} as GitUserHistoriesType,
    },
    reducers: {
        setGitUserHistories(state, action: PayloadAction<GitUserHistoriesType[]>) {
            state.gitUserHistories = action.payload;
        },
        setGitUserHistory(state, action: PayloadAction<GitUserHistoriesType>) {
            state.gitUserHistory = action.payload;
        },
    }
});

export default gitMetricSlice.reducer;
export const {
    setGitUserHistories,
    setGitUserHistory,
} = gitMetricSlice.actions;