import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { EmployeesDataTypes } from '../types';

const employeesSlice = createSlice({
    name: 'employeesSlice',
    initialState: {
        employeesData: [] as EmployeesDataTypes[],
        selectedEmployeeId: '',
        employeeData: {
            id: '',
            image: '',
            name: '',
            surname: '',
            birthday: '',
            description: '',
            start_date: '',
            role: 'founder',
            position: 'fullStack',
            email: '',
            phone: '',
            projects: [],
            telegram_chat_id: '',
        } as EmployeesDataTypes,
        createEmployeeData: {
            id: '',
            image: '',
            name: '',
            surname: '',
            birthday: '',
            description: '',
            start_date: '',
            role: 'founder',
            position: 'fullStack',
            email: '',
            phone: '',
            projects: [],
            telegram_chat_id: '',
        } as EmployeesDataTypes,
    },
    reducers: {
        setEmployeesData(state, action: PayloadAction<EmployeesDataTypes[]>) {
            state.employeesData = action.payload;
        },
        addNewEmployee(state, action: PayloadAction<EmployeesDataTypes>) {
            state.employeesData.unshift(action.payload);
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
        saveUpdatedEmployeeData(state, action: PayloadAction<EmployeesDataTypes>) {
            state.selectedEmployeeId = '';

            const foundIndex = state.employeesData.findIndex(elem => elem.id === action.payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.employeesData[foundIndex] = action.payload;
        },
        deleteEmployee(state, action: PayloadAction<string>) {
            const foundIndex = state.employeesData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.employeesData.splice(foundIndex, 1);
        },
        createEmployee(state, action: PayloadAction<any>) {
            Object.assign(state.createEmployeeData, action.payload);
        },
        updateCreatedEmployeeProjects(state, action: PayloadAction<any>) {
            const updatedData = {...state.createEmployeeData};
            const foundIndex = updatedData.projects.findIndex((el: any)=> el.id === action.payload.id);
            const newProjects = [...updatedData.projects];

            if (foundIndex !== -1) {
                newProjects.splice(foundIndex, 1);
            } else {
                newProjects.push(action.payload);
            }

            updatedData.projects = newProjects;
            state.createEmployeeData = updatedData;
        },
        resetEmployeDataInModal(state) {
            state.createEmployeeData = {
                id: '',
                image: '',
                name: '',
                surname: '',
                birthday: '',
                description: '',
                start_date: '',
                role: 'founder',
                position: 'fullStack',
                email: '',
                phone: '',
                projects: [],
                telegram_chat_id: '',
            }
        },
    },
});

export default employeesSlice.reducer;
export const {
    setEmployeesData,
    setSelectedEmployeeId,
    saveUpdatedEmployeeData,
    addNewEmployee,
    deleteEmployee,
    createEmployee,
    updateCreatedEmployeeProjects,
    resetEmployeDataInModal,
} = employeesSlice.actions;
