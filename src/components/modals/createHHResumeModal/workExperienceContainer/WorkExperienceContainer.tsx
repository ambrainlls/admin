import React, { ChangeEvent } from 'react';
import styles from './workExperienceContainer.module.css';

function WorkExperienceContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    return (
        <div className={styles.workContainer}>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Organization</label>
                <input
                    id="organization"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'organization')}}
                />
            </div>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Job title</label>
                <input
                    id="job_title"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'job_title')}}
                />
            </div>
            <div className={styles.workDetailsItem}>
                <label htmlFor="">Responsibilities</label>
                <input
                    id="responsibilities"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'responsibilities')}}
                />
            </div>
            <div className={styles.workTimeContainer}>
                <div className={styles.workTimeItem}>
                    <label htmlFor="">Beginning work</label>
                    <input
                        id="beginning_work"
                        type="number"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'beginning_work')}}
                    />
                </div>
                <div className={styles.workTimeItem}>
                    <label htmlFor="">Ending</label>
                    <input
                        id="ending"
                        type="number"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'ending')}}
                    />
                </div>
                <div className={styles.workTimeBoolItem}>
                    <label htmlFor="until_now">Until now</label>
                    <input
                        id="until_now"
                        type="checkbox"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'until_now')}}
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceContainer;
