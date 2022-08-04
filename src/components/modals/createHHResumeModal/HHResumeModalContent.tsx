import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
    addEducation,
    addWorkExperiance,
    deleteEducation,
    deleteWorkExperiance
} from '../../../redux/slice/hhResumeSlice';
import EducationContainer from './resumeFields/educationContainer/EducationContainer';
import ContactContainer from './resumeFields/contactContainer/ContactContainer';
import BasicInformationContainer from './resumeFields/basicInformationContainer/BasicInformationContainer';
import SpecialityContainer from './resumeFields/specialityContainer/SpecialityContainer';
import WorkExperienceContainer from './resumeFields/workExperienceContainer/WorkExperienceContainer';
import LanguageSkillsContainer from './resumeFields/languageSkillsContainer/LanguageSkillsContainer';
import deleteIcon from '../../../assets/images/actionIcons/delete.svg';
import styles from './createHHResumeModalComponent.module.css';

interface EmployeeModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
}

const HHResumeModalContent = ({ handleClose, handleSave }: EmployeeModalContentProps) => {
    const dispatch = useDispatch();
    const hasWorkExperience = useSelector((state: RootState) => state.hhResumeReducer.hasWorkExperience);
    const education = useSelector((state: RootState) => state.hhResumeReducer.education);
    const workExperiance = useSelector((state: RootState) => state.hhResumeReducer.experience);

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
                            {
                                workExperiance.length ? workExperiance.map(item => (
                                    <div key={item.id} className={styles.workExperianceContainer}>
                                        <div className={styles.deleteIconContainer}>
                                            <img src={deleteIcon} alt={deleteIcon}
                                                 onClick={() => {dispatch(deleteWorkExperiance(item.id))}}
                                            />
                                        </div>
                                        <WorkExperienceContainer
                                            workExperience={item}
                                        />
                                    </div>
                                )) : null
                            }
                            <span
                                className={`${styles.addWorkExperiance}`}
                                onClick={() => dispatch(addWorkExperiance())}
                            >
                                Add work experiance
                            </span>
                        </div>
                    )
                }
                <div className={styles.fieldsSectionContainer}>
                    <p>Education</p>
                    {
                        education.length ? education.map((item) => (
                            <div key={item.id} className={styles.educationContainer}>
                                <div className={styles.deleteIconContainer}>
                                    <img src={deleteIcon} alt={deleteIcon}
                                         onClick={() => dispatch(deleteEducation(item.id))}
                                    />
                                </div>
                                <EducationContainer
                                    education={item}
                                />
                            </div>
                        )) : null

                    }
                    <span
                        className={`${styles.addEducation}`}
                        onClick={() => dispatch(addEducation())}
                    >
                        Add education
                    </span>
                </div>
                <div className={styles.fieldsSectionContainer}>
                    <p>Language skills</p>
                    <LanguageSkillsContainer />
                </div>
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn} onClick={handleClose}>
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
