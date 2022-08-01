import React from 'react';
import styles from './createEmployeeModalComponent.module.css';

interface EmployeeModalContentProps {
    handleClose: () => void;
}

const EmployeeModalContent = ({ handleClose }: EmployeeModalContentProps) => {
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
                        className={styles.startDate}
                        id="startDate"
                        type="date"
                        name="startDate"
                        defaultValue={''}
                        onChange={() => {}}
                        placeholder="Start Date"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="role"
                        type="text"
                        name="role"
                        defaultValue={''}
                        onChange={() => {}}
                        placeholder="Role"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="position"
                        type="text"
                        name="position"
                        defaultValue={''}
                        onChange={() => {}}
                        placeholder="Position"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        defaultValue={''}
                        onChange={() => {}}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        defaultValue={''}
                        onChange={() => {}}
                        placeholder="Phone"
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

export default EmployeeModalContent
