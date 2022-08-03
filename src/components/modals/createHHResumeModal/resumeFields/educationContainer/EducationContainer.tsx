import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './educationContainer.module.css';
import {setEducation} from "../../../../../redux/slice/hhResumeSlice";
import {RootState} from "../../../../../redux";

function EducationContainer() {
    const dispatch = useDispatch();

    const educationLevel = useSelector(
        (state: RootState) => (state.hhResumeReducer.education && state.hhResumeReducer.education.education_level)
            ? state.hhResumeReducer.education.education_level
            : 'average'
    );
    const institution = useSelector(
        (state: RootState) => (state.hhResumeReducer.education && state.hhResumeReducer.education.institution)
            ? state.hhResumeReducer.education.institution
            : ''
    );
    const faculty = useSelector(
        (state: RootState) => (state.hhResumeReducer.education && state.hhResumeReducer.education.faculty)
            ? state.hhResumeReducer.education.faculty
            : ''
    );
    const specialization = useSelector(
        (state: RootState) => (state.hhResumeReducer.education && state.hhResumeReducer.education.specialization)
            ? state.hhResumeReducer.education.specialization
            : ''
    );
    const yearOfEnding = useSelector(
        (state: RootState) => (state.hhResumeReducer.education && state.hhResumeReducer.education.year_of_ending)
            ? state.hhResumeReducer.education.year_of_ending
            : ''
    );

    return (
        <div>
            <div className={styles.educationDetails}>
                <div className={styles.educationLevelContainer}>
                    <label htmlFor="">Level</label>
                    <select
                        value={educationLevel}
                        onChange={(evt) => dispatch(setEducation({education_level: evt.target.value}))}
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
                                    onChange={(evt) => dispatch(setEducation({institution: evt.target.value}))}
                                    placeholder={'Educational institution'}
                                />
                            </div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="faculty"
                                    type="text"
                                    value={faculty}
                                    onChange={(evt) => dispatch(setEducation({faculty: evt.target.value}))}
                                    placeholder={'Faculty'}
                                />
                            </div>
                            <div className={styles.educationDetailsItem}>
                                <input
                                    id="specialization"
                                    type="text"
                                    value={specialization}
                                    onChange={(evt) => dispatch(setEducation({specialization: evt.target.value}))}
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
                                    onChange={(evt) => dispatch(setEducation({year_of_ending: evt.target.value}))}
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
