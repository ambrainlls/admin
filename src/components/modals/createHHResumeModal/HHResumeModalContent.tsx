import React, { ChangeEvent } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EducationContainer from './resumeFields/educationContainer/EducationContainer';
import ContactContainer from './resumeFields/contactContainer/ContactContainer';
import BasicInformationContainer from './resumeFields/basicInformationContainer/BasicInformationContainer';
import SpecialityContainer from './resumeFields/specialityContainer/SpecialityContainer';
import WorkExperienceContainer from './resumeFields/workExperienceContainer/WorkExperienceContainer';
import LanguageSkillsContainer from './resumeFields/languageSkillsContainer/LanguageSkillsContainer';
import styles from './createHHResumeModalComponent.module.css';
import {RootState} from "../../../redux";

interface EmployeeModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
}

const HHResumeModalContent = ({ handleClose, handleSave }: EmployeeModalContentProps) => {
    const hasWorkExperience = useSelector((state: RootState) => state.hhResumeReducer.hasWorkExperience);

    const handleReset = () => {
        handleClose();
    };

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
                {
                    hasWorkExperience && (
                        <div className={styles.fieldsSectionContainer}>
                            <p>Work experience</p>
                            <WorkExperienceContainer />
                        </div>
                    )
                }
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
