import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { createContact, resetContactDataInModal } from '../../../redux/slice/contactUsSlice';
import styles from './createContactUsModalComponent.module.css';

interface ContactUsModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
}

const ContactUsModalContent = ({ handleClose, handleSave }: ContactUsModalContentProps) => {
    const dispatch = useDispatch();

    const contactData = useSelector((state: RootState) => state.contactUsReducer.contactData);

    const handleChangeContactData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {
        dispatch(createContact({[key]: evt.target.value}));
    };

    const handleReset = () => {
        handleClose();
        dispatch(resetContactDataInModal());
    };

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Contact us</p>
            </div>
            {/*<div className={styles.fieldsToFill}>*/}
            {/*    <div className={styles.modalField}>*/}
            {/*        <input*/}
            {/*            id="name"*/}
            {/*            type="text"*/}
            {/*            name="name"*/}
            {/*            value={employeeData.name ? employeeData.name : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'name')}}*/}
            {/*            placeholder="Name"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={styles.modalField}>*/}
            {/*        <input*/}
            {/*            id="surname"*/}
            {/*            type="text"*/}
            {/*            name="surname"*/}
            {/*            value={employeeData.surname ? employeeData.surname : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'surname')}}*/}
            {/*            placeholder="Surname"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={`${styles.dateContainer}`}>*/}
            {/*        <label htmlFor="startDate">Start Date</label>*/}
            {/*        <input*/}
            {/*            className={styles.startDate}*/}
            {/*            id="startDate"*/}
            {/*            type="date"*/}
            {/*            name="startDate"*/}
            {/*            value={employeeData.startDate ? employeeData.startDate : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'startDate')}}*/}
            {/*            placeholder="Start Date"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={`${styles.modalField} ${styles.selectContainer}`}>*/}
            {/*        <label htmlFor="role">Role</label>*/}
            {/*        <select*/}
            {/*            id="role"*/}
            {/*            name="role"*/}
            {/*            value={employeeData.role ? employeeData.role : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'role')}}*/}
            {/*        >*/}
            {/*            <option value="founder">Founder</option>*/}
            {/*            <option value="teamleader">Teamleader</option>*/}
            {/*            <option value="developer">Developer</option>*/}
            {/*            <option value="hr">HR</option>*/}
            {/*            <option value="designer">Designer</option>*/}
            {/*            <option value="qa">QA</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <div className={`${styles.modalField} ${styles.selectContainer}`}>*/}
            {/*        <label htmlFor="position">Position</label>*/}
            {/*        <select*/}
            {/*            id="position"*/}
            {/*            name="position"*/}
            {/*            value={employeeData.position ? employeeData.position : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'position')}}*/}
            {/*        >*/}
            {/*            <option value="fullstack">Fullstack</option>*/}
            {/*            <option value="frontend">Frontend</option>*/}
            {/*            <option value="backend">Backend</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <div className={styles.modalField}>*/}
            {/*        <input*/}
            {/*            id="email"*/}
            {/*            type="text"*/}
            {/*            name="email"*/}
            {/*            value={employeeData.email ? employeeData.email : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'email')}}*/}
            {/*            placeholder="Email"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={styles.modalField}>*/}
            {/*        <input*/}
            {/*            id="phone"*/}
            {/*            type="text"*/}
            {/*            name="phone"*/}
            {/*            value={employeeData.phone ? employeeData.phone : ''}*/}
            {/*            onChange={(evt) => {handleChangeEmployeData(evt, 'phone')}}*/}
            {/*            placeholder="Phone"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn}
                        onClick={handleReset}
                >
                    Close
                </button>
                <button className={styles.saveBtn}
                        onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default ContactUsModalContent
