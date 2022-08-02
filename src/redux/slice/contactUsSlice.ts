import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ContactUsTypes } from '../types';

const contactUsSlice = createSlice({
    name: 'contactUsSlice',
    initialState: {
        contactUsData: [] as ContactUsTypes[],
    },
    reducers: {
        setContactsData(state, action: PayloadAction<ContactUsTypes[]>) {
            state.contactUsData = action.payload;
        },
    },
});

export default contactUsSlice.reducer;
export const {
    setContactsData,
} = contactUsSlice.actions;
