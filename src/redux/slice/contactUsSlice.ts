import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ContactUsTypes } from '../types';

const contactUsSlice = createSlice({
    name: 'contactUsSlice',
    initialState: {
        contactUsData: [] as ContactUsTypes[],
        selectedContactId: '',
    },
    reducers: {
        setContactsData(state, action: PayloadAction<ContactUsTypes[]>) {
            state.contactUsData = action.payload;
        },
        setSelectedContactId(state, action: PayloadAction<string>) {
            state.selectedContactId = action.payload;
        },
        updateContactData(state, action: PayloadAction<any>) {
            const foundIndex = state.contactUsData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.contactUsData[foundIndex], action.payload.updatedParams);
        },
        saveContactData(state) {
            state.selectedContactId = '';
        },
        deleteContact(state, action: PayloadAction<string>) {
            const foundIndex = state.contactUsData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.contactUsData.splice(foundIndex, 1);
        }
    },
});

export default contactUsSlice.reducer;
export const {
    setContactsData,
    setSelectedContactId,
    updateContactData,
    saveContactData,
    deleteContact,
} = contactUsSlice.actions;
