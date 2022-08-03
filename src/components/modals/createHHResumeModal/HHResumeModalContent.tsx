import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import EducationContainer from './educationContainer/EducationContainer';
import ContactContainer from './contactContainer/ContactContainer';
import BasicInformationContainer from './basicInformationContainer/BasicInformationContainer';
import SpecialityContainer from './specialityContainer/SpecialityContainer';
import WorkExperienceContainer from './workExperienceContainer/WorkExperienceContainer';
import LanguageSkillsContainer from './languageSkillsContainer/LanguageSkillsContainer';
import styles from './createHHResumeModalComponent.module.css';

interface EmployeeModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
}

const HHResumeModalContent = ({ handleClose, handleSave }: EmployeeModalContentProps) => {
    const dispatch = useDispatch();

    const handleReset = () => {
        handleClose();
    };

    const handleChangeHHResumeData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {}

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Create resume in HH.ru</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.fieldsSectionContainer}>
                    <p>Contact details</p>
                    <ContactContainer />
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Basic information</p>
                    <BasicInformationContainer />
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Speciality</p>
                    <SpecialityContainer />
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Work experience</p>
                    <WorkExperienceContainer />
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Education</p>
                    <EducationContainer />
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Language skills</p>
                    <LanguageSkillsContainer />
                </div>
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn} onClick={handleReset}>
                    Close
                </button>
                <button className={styles.saveBtn} onClick={handleSave}>
                    Save
                </button>
            </div>
        </>
    )
}

export default HHResumeModalContent
