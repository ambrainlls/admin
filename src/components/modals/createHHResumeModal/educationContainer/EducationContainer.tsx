import React, { ChangeEvent } from 'react';
import styles from './educationContainer.module.css';

function EducationContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {};
    return (
        <div>
            <div className={styles.educationDetails}>
                <div className={styles.educationLevelContainer}>
                    <label htmlFor="">Level</label>
                    <select name="" id="">
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
                <div className={styles.educationDetailsItem}>
                    <input
                        id="institution"
                        type="text"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'institution')}}
                        placeholder={'Educational institution'}
                    />
                </div>
                <div className={styles.educationDetailsItem}>
                    <input
                        id="faculty"
                        type="text"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'faculty')}}
                        placeholder={'Faculty'}
                    />
                </div>
                <div className={styles.educationDetailsItem}>
                    <input
                        id="specialization"
                        type="text"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'specialization')}}
                        placeholder={'Specialization'}

                    />
                </div>
                <div className={styles.educationDetailsItem}>
                    <input
                        id="year_of_ending"
                        type="number"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'year_of_ending')}}
                        placeholder={'Year of ending'}
                    />
                </div>
            </div>
        </div>
    )
}

export default EducationContainer;
