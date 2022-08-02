import { createSlice, PayloadAction} from '@reduxjs/toolkit';

const key = window.location.pathname;

const activeTabParam: any = {
    '/': 'Employees',
    '/employees': 'Employees',
    '/contact-us': 'Contact us',
    '/resume': 'Resume',
    '/feedback': 'Feedback',
}

const leftDrawerSlice = createSlice({
    name: 'leftDrawerSlice',
    initialState: {
        activeTab: activeTabParam[key],
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
