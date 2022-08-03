import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { setCV, setHasWorkExperience, setSelectedCountries, updateCountyIds } from '../../../../../redux/slice/hhResumeSlice';
import BirthdayPickerForResume from '../birthdayPicker/BirthdayPickerForResume';
import CitizenshipContainer from '../citizenshipContainer/CitizenshipContainer';
import CreateCitizenshipModalComponent from '../../../citizenshipModal/CreateCitizenshipModalComponent';
import styles from './basicInformationContainer.module.css';

function BasicInformationContainer() {
    const dispatch = useDispatch();

    const hasWorkExperience = useSelector((state: RootState) => state.hhResumeReducer.hasWorkExperience);

    const [showCountriesModal, setShowCountriesModal] = useState(false);

    const countries = [
        {
            country_id: 1,
            name: 'Moscow'
        },
        {
            country_id: 2,
            name: 'Yerevan'
        },
        {
            country_id: 3,
            name: 'Yerevan'
        },
        {
            country_id: 4,
            name: 'Yerevan'
        },
        {
            country_id: 5,
            name: 'Yerevan'
        },
        {
            country_id: 6,
            name: 'Yerevan'
        },
        {
            country_id: 7,
            name: 'Yerevan'
        },
        {
            country_id: 8,
            name: 'Yerevan'
        },
    ];

    const handleSaveSelectedCountries = (selectedCountriesIds: string[]) => {
        setShowCountriesModal(false);
        dispatch(setCV({country_id: selectedCountriesIds}));

        const foundSelectedCountries = countries.filter((item: any) => Array.from(selectedCountriesIds).includes(item.country_id));
        dispatch(setSelectedCountries(foundSelectedCountries));
    };

    const handleDeleteCountry = (countryId: string) => {
        dispatch(updateCountyIds(countryId));
    };

    return (
        <div>
            <div className={`${styles.birthDayContainer}`}>
                <label>Date of birth</label>
                <BirthdayPickerForResume />
            </div>
            <div className={styles.citizenshipContainer}>
                <label>Citizenship</label>
                <CitizenshipContainer
                    handleDeleteCountry={handleDeleteCountry}
                    handleShowModal={() => setShowCountriesModal(true)}
                />
                {
                    showCountriesModal && (
                        <CreateCitizenshipModalComponent
                            handleClose={() => setShowCountriesModal(false)}
                            handleSave={handleSaveSelectedCountries}
                            countries={countries}
                        />
                    )
                }
            </div>
            <div className={`${styles.workExperienceContainer}`}>
                <label>Work experience</label>
                <div>
                    <div className={styles.workExperienceItem}>
                        <input id={'hasWork'} type="radio"
                               onChange={() => dispatch(setHasWorkExperience(true))}
                               checked={hasWorkExperience}
                        />
                        <label htmlFor="hasWork"
                               onChange={() => dispatch(setHasWorkExperience(true))}
                        >
                            Have work experience
                        </label>
                    </div>
                    <div className={styles.workExperienceItem}>
                        <input id={'noWork'} type="radio"
                               onChange={() => dispatch(setHasWorkExperience(false))}
                               checked={!hasWorkExperience}
                        />
                        <label htmlFor="noWork"
                               onChange={() => dispatch(setHasWorkExperience(false))}
                        >
                            No work expirience
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInformationContainer;
