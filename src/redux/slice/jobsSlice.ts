import { uniqueId } from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobsDataType, Requirements }  from '../types';

const jobsSlice = createSlice({
    name: 'jobsSlice',
    initialState: {
        jobsData: [] as JobsDataType[],
        createJobData: {
            id: '',
            description: '',
            image: '',
            location: '',
            position: '',
            status: '',
            title: '',
            work_time: '',
            requirements: [],
        } as JobsDataType,
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
                image: '',
                location: '',
                position: '',
                status: '',
                title: '',
                work_time: '',
                requirements: []
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
        addNewJob(state, action: PayloadAction<any>) {
            state.jobsData.unshift(action.payload);
        },
        addNewRequirement(state) {
            state.createJobData.requirements.push(
                {
                    id: uniqueId(),
                    name: ''
                }
            );
        },
        updateJobRequirement(state, action: PayloadAction<Requirements>) {
            const { payload } = action;
            const foundIndex = state.createJobData.requirements.findIndex((item: Requirements) => item.id === payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.createJobData.requirements[foundIndex] = payload;
        },
        deleteJobRequirement(state, action: PayloadAction<string>) {
            const { payload } = action;
            const foundIndex = state.createJobData.requirements.findIndex((item: Requirements) => item.id === payload);

            if (foundIndex === -1) {
                return;
            }

            state.createJobData.requirements.splice(foundIndex, 1);
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
    addNewRequirement,
    updateJobRequirement,
    deleteJobRequirement,
} = jobsSlice.actions;
