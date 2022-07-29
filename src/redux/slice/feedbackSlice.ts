import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { FeedbackTypes } from '../types';

const feedbackSlice = createSlice({
    name: 'feedbackSlice',
    initialState: {
        feedbackData: [] as FeedbackTypes[],
        selectedFeedbackId: '',
    },
    reducers: {
        setFeedbackData(state, action: PayloadAction<FeedbackTypes[]>) {
            state.feedbackData = action.payload;
        },
        setSelectedFeedbackId(state, action: PayloadAction<string>) {
            state.selectedFeedbackId = action.payload;
        },
        updateFeedbackData(state, action: PayloadAction<any>) {
            const foundIndex = state.feedbackData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.feedbackData[foundIndex], action.payload.updatedParams);
        },
        saveFeedbackData(state) {
            state.selectedFeedbackId = '';
        },
        deleteFeedback(state, action: PayloadAction<string>) {
            const foundIndex = state.feedbackData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.feedbackData.splice(foundIndex, 1);
        }
    },
});

export default feedbackSlice.reducer;
export const {
    setFeedbackData,
    setSelectedFeedbackId,
    updateFeedbackData,
    saveFeedbackData,
    deleteFeedback,
} = feedbackSlice.actions;
