import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { hhResumeCV, hhResumeEducation, hhResumeExperience, hhResumeLanguage, hhResumeSpeciality } from '../types';

const hhResumeSlice = createSlice({
    name: 'hhResumeSlice',
    initialState: {
        cv: null as unknown as hhResumeCV,
        education: null as unknown as hhResumeEducation,
        experience: [] as hhResumeExperience[],
        // language: null as unknown as hhResumeLanguage,
        language: null as unknown as any,
        speciality: null as unknown as hhResumeSpeciality,
        selectedCountries: [],
        hasWorkExperience: false,
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
        setEducation(state, action: PayloadAction<any>) {
            state.education = {...state.education, ...action.payload};
        },
        setLanguage(state, action: PayloadAction<any>) {
            state.language = {...state.language, ...action.payload};
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
    setEducation,
    setLanguage,
} = hhResumeSlice.actions;
