import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateProjectTypes, ProjectTypes } from "../types";

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projectsData: [] as ProjectTypes[],
        selectedProjectId: '',
        projectData: {
            id: '',
            company_name: '',
            employees: [],
        } as ProjectTypes,
        createProjectData: {
            id: '',
            company_name: '',
            employees_id: []
        } as CreateProjectTypes
    },
    reducers: {
        setProjectsData(state, action: PayloadAction<ProjectTypes[]>) {
            state.projectsData = action.payload;
        },
        setSelectedProjectId(state, action: PayloadAction<string>) {
            state.selectedProjectId = action.payload;
        },
        updateProjectData(state, action: PayloadAction<any>) {
            const foundIndex = state.projectsData.findIndex((el)=> el.id === action.payload.id);

            if(foundIndex === -1){
                return;
            }

            Object.assign(state.projectsData[foundIndex], action.payload.updatedParams);
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
        resetProjectDataInModal(state) {
            state.createProjectData = {
                id: '',
                company_name: '',
                employees_id: [],
            }
        },
        addProject(state, action: PayloadAction<ProjectTypes>) {
            state.projectsData.push(action.payload);
        }
    }
});

export default projectSlice.reducer;
export const {
    setProjectsData,
    setSelectedProjectId,
    updateProjectData,
    saveUpdatedProjectData,
    deleteProject,
    createProject,
    resetProjectDataInModal,
    addProject,
} = projectSlice.actions;