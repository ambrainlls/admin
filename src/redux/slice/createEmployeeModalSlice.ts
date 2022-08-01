import { createSlice } from '@reduxjs/toolkit';

const createEmployeeModalSlice = createSlice({
    name: 'createEmployeeModalSlice',
    initialState: {
        isOpen: false,
    },
    reducers: {
        setIsOpen(state) {
            state.isOpen = !state.isOpen;
        }
    }
});

export default createEmployeeModalSlice.reducer;
export const {
    setIsOpen,
} = createEmployeeModalSlice.actions;
