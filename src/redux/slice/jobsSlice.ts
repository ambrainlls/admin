import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {JobsDataType} from "../types";

const jobsSlice = createSlice({
    name: 'jobsSlice',
    initialState: {
        jobsData: [] as JobsDataType[],
    },
    reducers: {
        setJobsData(state, action: PayloadAction<JobsDataType[]>) {
            state.jobsData = action.payload;
        },
    }
});

export default jobsSlice.reducer;
export const {
    setJobsData,
} = jobsSlice.actions;