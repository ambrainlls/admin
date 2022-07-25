import { createSlice, PayloadAction} from '@reduxjs/toolkit';

const leftDrawerSlice = createSlice({
    name: 'leftDrawerSlice',
    initialState: {
        activeTab: 'Home Page',
    },
    reducers: {
        setActiveTab(state, action: PayloadAction<string>) {
            state.activeTab = action.payload;
        }
    }
});

export default leftDrawerSlice.reducer;
export const {
    setActiveTab,
} = leftDrawerSlice.actions;
