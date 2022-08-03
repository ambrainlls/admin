import React from 'react';
import BirthdayPickerForResume from '../birthdayPicker/BirthdayPickerForResume';
import CitizenshipContainer from '../citizenshipContainer/CitizenshipContainer';
import styles from './basicInformationContainer.module.css';

function BasicInformationContainer() {
    return (
        <div>
            <div className={`${styles.birthDayContainer}`}>
                <label>Date of birth</label>
                <BirthdayPickerForResume />
            </div>
            <div className={styles.citizenshipContainer}>
                <label>Citizenship</label>
                <CitizenshipContainer />
            </div>
            <div className={`${styles.workExperienceContainer}`}>
                <label>Work experience</label>
                <div>
                    <div className={styles.workExperienceItem}>
                        <input id={'haveWork'} type="radio" />
                        <label htmlFor="haveWork"> Have work experience</label>
                    </div>
                    <div className={styles.workExperienceItem}>
                        <input id={'noWork'} type="radio" />
                        <label htmlFor="noWork"> No work expirience</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInformationContainer;
