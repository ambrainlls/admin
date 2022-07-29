import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DevelopersDataTypes } from '../types';

const developersSlice = createSlice({
    name: 'developersSlice',
    initialState: {
        developersData: [] as DevelopersDataTypes[],
        selectedDeveloperId: '',
    },
    reducers: {
        setDevelopersData(state, action: PayloadAction<DevelopersDataTypes[]>) {
            state.developersData = action.payload;
        },
        setSelectedDeveloperId(state, action: PayloadAction<string>) {
            state.selectedDeveloperId = action.payload;
        },
        updateDeveloperData(state, action: PayloadAction<any>) {
            const foundIndex = state.developersData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.developersData[foundIndex], action.payload.updatedParams);
        },
        saveDeveloperData(state) {
            state.selectedDeveloperId = '';
        },
        deleteDeveloper(state, action: PayloadAction<string>) {
            const foundIndex = state.developersData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.developersData.splice(foundIndex, 1);
        }
    },
});

export default developersSlice.reducer;
export const {
    setDevelopersData,
    setSelectedDeveloperId,
    saveDeveloperData,
    updateDeveloperData,
    deleteDeveloper,
} = developersSlice.actions;
