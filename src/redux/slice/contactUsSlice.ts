import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ContactUsTypes } from '../types';

const contactUsSlice = createSlice({
    name: 'contactUsSlice',
    initialState: {
        contactUsData: [] as ContactUsTypes[],
        selectedContactId: '',
        contactData: {
            id: '',
            name: '',
            lastname: '',
            email: '',
            message: '',
        } as ContactUsTypes,
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
        },
        createContact(state, action: PayloadAction<any>) {
            Object.assign(state.contactData, action.payload);
        },
        resetContactDataInModal(state) {
            state.contactData = {
                id: '',
                name: '',
                lastname: '',
                email: '',
                message: '',
            }
        },
        addNewContact(state, action: PayloadAction<ContactUsTypes>) {
            state.contactUsData.unshift(action.payload);
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
    createContact,
    resetContactDataInModal,
    addNewContact,
} = contactUsSlice.actions;
