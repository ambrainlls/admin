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
            <div className={styles.fieldsToFill}>
                <div className={styles.modalField}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={contactData.name ? contactData.name : ''}
                        onChange={(evt) => {handleChangeContactData(evt, 'name')}}
                        placeholder="Name"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={contactData.lastname ? contactData.lastname : ''}
                        onChange={(evt) => {handleChangeContactData(evt, 'lastname')}}
                        placeholder="Lastname"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={contactData.email ? contactData.email : ''}
                        onChange={(evt) => {handleChangeContactData(evt, 'email')}}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="message"
                        type="text"
                        name="message"
                        value={contactData.message ? contactData.message : ''}
                        onChange={(evt) => {handleChangeContactData(evt, 'message')}}
                        placeholder="Message"
                    />
                </div>
            </div>
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
