import React, { ChangeEvent } from 'react';
import burgerIcon from '../../../../assets/images/BurgerIcon.svg';
import styles from './citizenshipContainer.module.css';

function CitizenshipContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    return (
        <div className={styles.citizenshipDetailsItem}>
            <input
                id="career_objective"
                type="text"
                value={''}
                onChange={(evt) => {handleChangeHHResumeData(evt, 'career_objective')}}
            />
            <img src={burgerIcon} alt={burgerIcon} />
        </div>
    )
}

export default CitizenshipContainer;
