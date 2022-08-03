import React, { ChangeEvent } from 'react';
import styles from './contactContainer.module.css';

function ContactContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    return (
        <div>
            <div className={styles.modalField}>
                <input
                    id="firstName"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'firstName')}}
                    placeholder="Name"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="lastName"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'lastName')}}
                    placeholder="Lastname"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="phone"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'phone')}}
                    placeholder="Mobile phone"
                />
            </div>
        </div>
    )
}

export default ContactContainer;
