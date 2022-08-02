import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { EmployeesDataTypes } from '../types';

const employeesSlice = createSlice({
    name: 'employeesSlice',
    initialState: {
        employeesData: [] as EmployeesDataTypes[],
        selectedEmployeeId: '',
        employeeData: {
            id: '',
            name: '',
            surname: '',
            startDate: '',
            role: '',
            position: '',
            email: '',
            phone: '',
        } as EmployeesDataTypes,
    },
    reducers: {
        setEmployeesData(state, action: PayloadAction<EmployeesDataTypes[]>) {
            state.employeesData = action.payload;
        },
        setSelectedEmployeeId(state, action: PayloadAction<string>) {
            state.selectedEmployeeId = action.payload;
        },
        updateEmployeeData(state, action: PayloadAction<any>) {
            const foundIndex = state.employeesData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.employeesData[foundIndex], action.payload.updatedParams);
        },
        saveEmployeeData(state) {
            state.selectedEmployeeId = '';
        },
        deleteEmployee(state, action: PayloadAction<string>) {
            const foundIndex = state.employeesData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.employeesData.splice(foundIndex, 1);
        },
        createEmployee(state, action: PayloadAction<any>) {
            Object.assign(state.employeeData, action.payload);
        },
        resetEmployeDataInModal(state) {
            state.employeeData = {
                id: '',
                name: '',
                surname: '',
                startDate: '',
                role: '',
                position: '',
                email: '',
                phone: '',
            }
        }
    },
});

export default employeesSlice.reducer;
export const {
    setEmployeesData,
    setSelectedEmployeeId,
    saveEmployeeData,
    updateEmployeeData,
    deleteEmployee,
    createEmployee,
    resetEmployeDataInModal,
} = employeesSlice.actions;
