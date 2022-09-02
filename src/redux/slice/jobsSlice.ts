import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateJobDataType, JobsDataType } from '../types';

const jobsSlice = createSlice({
    name: 'jobsSlice',
    initialState: {
        jobsData: [] as JobsDataType[],
        createJobData: {
            id: '',
            description: '',
            image: null,
            location: '',
            position: '',
            status: '',
            title: '',
            work_time: '',
        } as CreateJobDataType,
        selectedJobId: '',
    },
    reducers: {
        setJobsData(state, action: PayloadAction<JobsDataType[]>) {
            state.jobsData = action.payload;
        },
        resetJobDataInModal(state) {
            state.createJobData = {
                id: '',
                description: '',
                image: null,
                location: '',
                position: '',
                status: '',
                title: '',
                work_time: '',
            }
        },
        setCreateJobDataInModal(state, action: PayloadAction<any>) {
            Object.assign(state.createJobData, action.payload);
        },
        setSelectedJobId(state, action: PayloadAction<string>) {
            state.selectedJobId = action.payload;
        },
        deleteJob(state, action: PayloadAction<string>) {
            const foundIndex = state.jobsData.findIndex((item) => item.id === action.payload);

            if(foundIndex === -1) {
                return;
            }

            state.jobsData.splice(foundIndex, 1);
        },
        addNewJob(state, action: PayloadAction<JobsDataType>) {
            state.jobsData.unshift(action.payload);
        },
        saveUpdatedJobData(state, action: PayloadAction<JobsDataType>) {
            state.selectedJobId = '';

            const foundIndex = state.jobsData.findIndex(item => item.id === action.payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.jobsData[foundIndex] = action.payload;
        },
    }
});

export default jobsSlice.reducer;
export const {
    setJobsData,
    resetJobDataInModal,
    setCreateJobDataInModal,
    setSelectedJobId,
    deleteJob,
    addNewJob,
    saveUpdatedJobData,
} = jobsSlice.actions;
