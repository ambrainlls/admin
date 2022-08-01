import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../../redux/slice/createDeveloperModalSlice';
import styles from './createDeveloperModalComponent.module.css';

const PayoutModalContent = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setIsOpen(false));
    };

  return (
    <>
        <div className={styles.modalComponentTitle}>
            <p>Employee</p>
        </div>
        <div className={styles.fieldsToFill}>
            <div className={styles.modalField}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    defaultValue={''}
                    onChange={() => {}}
                    placeholder="Name"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="surname"
                    type="text"
                    name="surname"
                    defaultValue={''}
                    onChange={() => {}}
                    placeholder="Surname"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="developer"
                    type="text"
                    name="developer"
                    defaultValue={''}
                    onChange={() => {}}
                    placeholder="Profession"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    className={styles.beginning}
                    id="beginning"
                    type="date"
                    name="beginning"
                    defaultValue={''}
                    onChange={() => {}}
                    placeholder="Beginning"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="jobTitle"
                    type="text"
                    name="jobTitle"
                    defaultValue={''}
                    onChange={() => {}}
                    placeholder="Job Title"
                />
            </div>
        </div>
        <div className={styles.buttonsContent}>
            <button className={styles.closeBtn} onClick={handleClose}>Close</button>
            <button className={styles.saveBtn}>Save</button>
        </div>
    </>
  )
}

export default PayoutModalContent
