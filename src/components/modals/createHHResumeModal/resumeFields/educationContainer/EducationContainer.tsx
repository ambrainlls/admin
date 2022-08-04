import React from 'react';
import { useDispatch } from 'react-redux';
import { updateEducation } from '../../../../../redux/slice/hhResumeSlice';
import { hhResumeEducation } from '../../../../../redux/types';
import styles from './educationContainer.module.css';

interface EducationContainerProps {
    education: hhResumeEducation;
}

function EducationContainer({ education }: EducationContainerProps) {
    const dispatch = useDispatch();

    const educationLevel = education.education_level ? education.education_level : 'average';
    const institution = education.institution;
    const faculty = education.faculty;
    const specialization = education.specialization;
    const yearOfEnding = education.year_of_ending;

    return (
        <div>
            <div className={styles.educationDetails}>
                <div className={styles.educationLevelContainer}>
                    <label htmlFor="">Level</label>
                    <select
                        value={educationLevel}
                        onChange={(evt) => dispatch(
                            updateEducation(
                                {
                                    id: education.id,
                                    updatedParams: {
                                        education_level: evt.target.value
                                    }
                                }
                            ))
                        }
                    >
                        <option value="average">Average</option>
                        <option value="special_secondary">Specialized secondary</option>
                        <option value="unfinished_higher">Incomplete higher education</option>
                        <option value="higher">Higher</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="master">Master</option>
                        <option value="candidate">PhD</option>
                        <option value="doctor">Ph.D</option>
                    </select>
                </div>
                {
                    educationLevel !== 'average' && (
                        <div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="institution"
                                    type="text"
                                    value={institution}
                                    onChange={(evt) => dispatch(
                                        updateEducation(
                                            {
                                                id: education.id,
                                                updatedParams: {
                                                    institution: evt.target.value
                                                }
                                            }
                                        ))
                                    }
                                    placeholder={'Educational institution'}
                                />
                            </div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="faculty"
                                    type="text"
                                    value={faculty}
                                    onChange={(evt) => dispatch(
                                        updateEducation(
                                            {
                                                id: education.id,
                                                updatedParams: {
                                                    faculty: evt.target.value
                                                }
                                            }
                                        ))
                                    }
                                    placeholder={'Faculty'}
                                />
                            </div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="specialization"
                                    type="text"
                                    value={specialization}
                                    onChange={(evt) => dispatch(
                                        updateEducation(
                                            {
                                                id: education.id,
                                                updatedParams: {
                                                    specialization: evt.target.value
                                                }
                                            }
                                        ))
                                    }
                                    placeholder={'Specialization'}
                                />
                            </div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="year_of_ending"
                                    type="number"
                                    value={yearOfEnding}
                                    min={1800}
                                    max={3000}
                                    onChange={(evt) => dispatch(
                                        updateEducation(
                                            {
                                                id: education.id,
                                                updatedParams: {
                                                    year_of_ending: evt.target.value
                                                }
                                            }
                                        ))
                                    }
                                    placeholder={'Year of ending'}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default EducationContainer;
