import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const metricSlice = createSlice({
    name: 'metricSlice',
    initialState: {
        metricType: 'Git metric'
    },
    reducers: {
        setMetricType(state, action: PayloadAction<string>) {
            state.metricType = action.payload;
        },
    }
});

export default metricSlice.reducer;
export const {
    setMetricType,
} = metricSlice.actions;