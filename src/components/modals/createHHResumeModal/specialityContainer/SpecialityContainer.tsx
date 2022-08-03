import React, { ChangeEvent } from 'react';
import styles from './specialityContainer.module.css';

function SpecialityContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    return (
        <div className={styles.specialityContainer}>
            <div className={styles.specialityDetailsItem}>
                <label htmlFor="">Career objective</label>
                <input
                    id="career_objective"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'career_objective')}}
                />
            </div>
        </div>
    )
}

export default SpecialityContainer;
