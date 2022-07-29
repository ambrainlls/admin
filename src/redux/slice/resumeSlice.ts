import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ResumeTypes } from '../types';

const resumeSlice = createSlice({
    name: 'resumeSlice',
    initialState: {
        resumeData: [] as ResumeTypes[],
        selectedResumeId: '',
    },
    reducers: {
        setResumeData(state, action: PayloadAction<ResumeTypes[]>) {
            state.resumeData = action.payload;
        },
        setSelectedResumeId(state, action: PayloadAction<string>) {
            state.selectedResumeId = action.payload;
        },
        updateResumeData(state, action: PayloadAction<any>) {
            const foundIndex = state.resumeData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.resumeData[foundIndex], action.payload.updatedParams);
        },
        saveResumeData(state) {
            state.selectedResumeId = '';
        },
        deleteResume(state, action: PayloadAction<string>) {
            const foundIndex = state.resumeData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.resumeData.splice(foundIndex, 1);
        }
    },
});

export default resumeSlice.reducer;
export const {
    setResumeData,
    setSelectedResumeId,
    updateResumeData,
    saveResumeData,
    deleteResume,
} = resumeSlice.actions;
