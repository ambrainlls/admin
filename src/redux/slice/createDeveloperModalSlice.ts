import { createSlice, PayloadAction} from '@reduxjs/toolkit';

const createDeveloperModalSlice = createSlice({
    name: 'createDeveloperModalSlice',
    initialState: {
        isOpen: false,
    },
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = !state.isOpen;
        }
    }
});

export default createDeveloperModalSlice.reducer;
export const {
    setIsOpen,
} = createDeveloperModalSlice.actions;
