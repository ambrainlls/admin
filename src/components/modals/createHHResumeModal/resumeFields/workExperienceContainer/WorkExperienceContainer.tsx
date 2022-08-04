import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWorkExperiance } from '../../../../../redux/slice/hhResumeSlice';
import { hhResumeExperience } from '../../../../../redux/types';
import styles from './workExperienceContainer.module.css';

interface WorkExperienceContainerProps {
    workExperience: hhResumeExperience;
}
function WorkExperienceContainer({ workExperience }: WorkExperienceContainerProps) {
    const dispatch = useDispatch();

    const organization = workExperience.organization;
    const job_title = workExperience.job_title;
    const responsibilities = workExperience.responsibilities;
    const beginning_work = workExperience.beginning_work;
    const ending = workExperience.ending;
    const until_now = workExperience.until_now;

    return (
        <div className={styles.workContainer}>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Organization</label>
                <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(evt) => dispatch(
                        updateWorkExperiance(
                            {
                                id: workExperience.id,
                                updatedParams: {
                                    organization: evt.target.value
                                }
                            }
                        ))
                    }
                />
            </div>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Job title</label>
                <input
                    id="job_title"
                    type="text"
                    value={job_title}
                    onChange={(evt) => dispatch(
                        updateWorkExperiance(
                            {
                                id: workExperience.id,
                                updatedParams: {
                                    job_title: evt.target.value
                                }
                            }
                        ))
                    }
                />
            </div>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Responsibilities</label>
                <input
                    id="responsibilities"
                    type="text"
                    value={responsibilities}
                    onChange={(evt) => dispatch(
                        updateWorkExperiance(
                            {
                                id: workExperience.id,
                                updatedParams: {
                                    responsibilities: evt.target.value
                                }
                            }
                        ))
                    }
                />
            </div>
            <div className={styles.workTimeContainer}>
                <div className={styles.workTimeItem}>
                    <label htmlFor="">Beginning work</label>
                    <input
                        id="beginning_work"
                        type="number"
                        min={1800}
                        max={3000}
                        value={beginning_work}
                        onChange={(evt) => dispatch(
                            updateWorkExperiance(
                                {
                                    id: workExperience.id,
                                    updatedParams: {
                                        beginning_work: evt.target.value
                                    }
                                }
                            ))
                        }
                    />
                </div>
                <div className={styles.workTimeItem}>
                    <label htmlFor="">Ending</label>
                    <input
                        id="ending"
                        type="number"
                        min={1800}
                        max={3000}
                        value={(ending && !until_now) ? ending : ''}
                        disabled={until_now}
                        onChange={(evt) => dispatch(
                            updateWorkExperiance(
                                {
                                    id: workExperience.id,
                                    updatedParams: {
                                        ending: evt.target.value
                                    }
                                }
                            ))
                        }
                    />
                </div>
                <div className={styles.workTimeBoolItem}>
                    <label htmlFor="until_now">Until now</label>
                    <input
                        id="until_now"
                        type="checkbox"
                        checked={until_now}
                        onChange={(evt) => dispatch(
                            updateWorkExperiance(
                                {
                                    id: workExperience.id,
                                    updatedParams: {
                                        until_now: evt.target.checked,
                                        ending: evt.target.checked && ''
                                    }
                                }
                            ))
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceContainer;
