import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectTypes } from '../types';

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projectsData: [] as ProjectTypes[],
        selectedProjectId: '',
        projectData: {
            id: '',
            company_name: '',
            project_name: '',
            image: '',
            base_image: '',
            logo: '',
            employees: [],
            description: '',
            link: '',
        } as ProjectTypes,
        createProjectData: {
            id: '',
            company_name: '',
            project_name: '',
            image: '',
            base_image: '',
            logo: '',
            employees: [],
            description: '',
            link: '',
        } as ProjectTypes
    },
    reducers: {
        setProjectsData(state, action: PayloadAction<ProjectTypes[]>) {
            state.projectsData = action.payload;
        },
        setSelectedProjectId(state, action: PayloadAction<string>) {
            state.selectedProjectId = action.payload;
        },
        saveUpdatedProjectData(state, action: PayloadAction<ProjectTypes>) {
            state.selectedProjectId = '';

            const foundIndex = state.projectsData.findIndex(elem => elem.id === action.payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.projectsData[foundIndex] = action.payload;
        },
        deleteProject(state, action: PayloadAction<string>) {
            const foundIndex = state.projectsData.findIndex((el)=> el.id === action.payload);

            if(foundIndex === -1){
                return;
            }

            state.projectsData.splice(foundIndex, 1);
        },
        createProject(state, action: PayloadAction<any>) {
            Object.assign(state.createProjectData, action.payload);
        },
        updateCreatedProjectEmployees(state, action: PayloadAction<any>) {
            const updatedData = {...state.createProjectData};
            const foundIndex = updatedData.employees.findIndex((el: any)=> el.id === action.payload.id);
            const newEmployees = [...updatedData.employees];

            if (foundIndex !== -1) {
                newEmployees.splice(foundIndex, 1);
            } else {
                newEmployees.push(action.payload);
            }

            updatedData.employees = newEmployees;
            state.createProjectData = updatedData;
        },
        resetProjectDataInModal(state) {
            state.createProjectData = {
                id: '',
                company_name: '',
                project_name: '',
                image: '',
                base_image: '',
                description: '',
                logo: '',
                link: '',
                employees: [],
            }
        },
        addProject(state, action: PayloadAction<ProjectTypes>) {
            state.projectsData.push(action.payload);
        },
    }
});

export default projectSlice.reducer;
export const {
    setProjectsData,
    setSelectedProjectId,
    updateCreatedProjectEmployees,
    saveUpdatedProjectData,
    deleteProject,
    createProject,
    resetProjectDataInModal,
    addProject,
} = projectSlice.actions;
