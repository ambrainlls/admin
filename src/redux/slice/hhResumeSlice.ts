import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { hhResumeCV, hhResumeEducation, hhResumeExperience, hhResumeNativeLanguage, hhResumeSpeciality } from '../types';

const hhResumeSlice = createSlice({
    name: 'hhResumeSlice',
    initialState: {
        cv: null as unknown as hhResumeCV,
        education: [] as hhResumeEducation[],
        experience: [] as hhResumeExperience[],
        nativeLanguage: null as unknown as hhResumeNativeLanguage,
        speciality: null as unknown as hhResumeSpeciality,
        selectedCountries: [],
        hasWorkExperience: false,
        foreignLanguages: [] as any [],
    },
    reducers: {
        setCV(state, action: PayloadAction<any>) {
            state.cv = {...state.cv, ...action.payload};
        },
        updateCountyIds(state, action: PayloadAction<string>) {
            const foundIndex = state.selectedCountries.findIndex((el: any) => el.country_id === action.payload);
            const foundIdIndex = state.cv.country_id.findIndex((el: any) => el === action.payload);

            if (foundIndex === -1 && foundIdIndex === -1) {
                return;
            }

            state.selectedCountries.splice(foundIndex, 1);
            state.cv.country_id.splice(foundIdIndex, 1);
        },
        setSelectedCountries(state, action: PayloadAction<any>) {
            state.selectedCountries = action.payload;
        },
        setHasWorkExperience(state, action: PayloadAction<boolean>) {
            state.hasWorkExperience = action.payload;
        },
        setSpeciality(state, action: PayloadAction<any>) {
            state.speciality = {...state.speciality, ...action.payload};
        },
        addEducation(state) {
            state.education.push(
                {
                    id: uniqueId(),
                    education_level: 'average',
                    institution: '',
                    faculty: '',
                    specialization: '',
                    year_of_ending: '',
                }
            );
        },
        updateEducation(state, action: PayloadAction<{id: string, updatedParams: any}>) {
            const foundIndex = state.education.findIndex(el => el.id === action.payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.education[foundIndex] = {...state.education[foundIndex], ...action.payload.updatedParams};
        },
        deleteEducation(state, action: PayloadAction<string>) {
            const foundIndex = state.education.findIndex(el => el.id === action.payload);

            if (foundIndex === -1) {
                return;
            }

            state.education.splice(foundIndex, 1);
        },
        setNativeLanguage(state, action: PayloadAction<any>) {
            state.nativeLanguage = {...state.nativeLanguage, ...action.payload};
        },
        updateForeignLanguage(state, action: PayloadAction<{value: string, languageId: string, key: string}>) {
            const { value, languageId, key } = action.payload;
            const newForeignLanguages: any[] = [...state.foreignLanguages];

            const foundIndex = newForeignLanguages.findIndex(el => el.id === languageId);

            if (foundIndex === -1) {
                return;
            }

            const updatedLanguage = {...newForeignLanguages[foundIndex]};

            updatedLanguage[key]= value;

            newForeignLanguages[foundIndex] = updatedLanguage;


            state.foreignLanguages = newForeignLanguages;
        },
        addForeignLanguage(state) {
            state.foreignLanguages.push({
                id: uniqueId(),
                language_type: '',
                level: 'a1'
            });
        } ,
        deleteForeignLanguage(state, action: PayloadAction<string>) {
            const foundIndex = state.foreignLanguages.findIndex(el => el.id === action.payload);

            if (foundIndex === -1) {
                return;
            }

            state.foreignLanguages.splice(foundIndex, 1);
        },
        addWorkExperiance(state) {
            state.experience.push(
                {
                    id: uniqueId(),
                    beginning_work: '',
                    until_now: false,
                    ending: '',
                    organization: '',
                    job_title: '',
                    responsibilities: '',
                }
            );
        },
        deleteWorkExperiance(state, action: PayloadAction<string>) {
            const foundIndex = state.experience.findIndex(el => el.id === action.payload);

            if (foundIndex === -1) {
                return;
            }

            state.experience.splice(foundIndex, 1);
        },
        updateWorkExperiance(state, action: PayloadAction<{id: string, updatedParams: any}>) {
            const foundIndex = state.experience.findIndex(el => el.id === action.payload.id);

            if (foundIndex === -1) {
                return;
            }

            state.experience[foundIndex] = {...state.experience[foundIndex], ...action.payload.updatedParams};
        },
    },
});

export default hhResumeSlice.reducer;
export const {
    setCV,
    setSelectedCountries,
    updateCountyIds,
    setHasWorkExperience,
    setSpeciality,
    addEducation,
    updateEducation,
    deleteEducation,
    setNativeLanguage,
    updateForeignLanguage,
    deleteForeignLanguage,
    addForeignLanguage,
    addWorkExperiance,
    deleteWorkExperiance,
    updateWorkExperiance,
} = hhResumeSlice.actions;
