import React, { useEffect } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetEmployeDataInModal } from '../../../redux/slice/employeesSlice';
import { roles } from '../../../helpers/helpers';
import { positions } from '../../../helpers/helpers';
import MultiSelect from '../../ui/multiSelect/MultiSelect';
import ImageUploader from '../../ui/imageUploader/ImageUploader';
import { EmployeeModalComponentProps } from './EmployeeModalComponent';
import deleteIcon from '../../../assets/images/delete.svg';
import styles from './employeeModalComponent.module.css';

const EmployeeModalContent = ({
    handleClose,
    handleSave,
    projectOptions,
    employeeData,
    handleChangeEmployeData,
    handleChangeEmployeeImage,
    handleSelectedOptions,
    nameValidationMessage,
    surnameValidationMessage,
    birthdayValidationMessage,
    startDateValidationMessage,
    emailValidationMessage,
    imageValidationMessage,
    phoneValidationMessage,
    telegramChatIdValidationMessage,
}: EmployeeModalComponentProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetEmployeDataInModal());
        };
    },[]);

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Employee</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.selectImageContainer}>
                    {
                        employeeData.image ? (
                            <div className={styles.imageContainer}>
                                <img src={`${employeeData.image}`} alt={'job'} />
                                <div className={`${styles.deleteImageContainer}`}
                                     onClick={() => {handleChangeEmployeeImage('', 'image')}}
                                >
                                    <img src={deleteIcon} alt={deleteIcon} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.imageUploaderContainer}>
                                <label htmlFor="image">
                                    <span>Choose a picture</span>
                                </label>
                                <ImageUploader handleFileChange={(evt) => {handleChangeEmployeeImage(evt, 'image')}} />
                                {
                                    imageValidationMessage && (
                                        <span className={styles.errorMessage}>
                                            {imageValidationMessage}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="standard"
                        value={(employeeData && employeeData.name) ? employeeData.name : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'name')}}
                    />
                    {
                        nameValidationMessage && (
                            <span className={styles.errorMessage}>
                                {nameValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="surname"
                        label="Surname"
                        variant="standard"
                        value={(employeeData && employeeData.surname) ? employeeData.surname : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'surname')}}
                    />
                    {
                        surnameValidationMessage && (
                            <span className={styles.errorMessage}>
                                {surnameValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={`${styles.dateContainer}`}>
                    <label className={`${birthdayValidationMessage ? styles.errorContainer : ""}`}>Birthday</label>
                    <TextField
                        id="birthday"
                        type="date"
                        variant="standard"
                        value={(employeeData && employeeData.birthday) ? employeeData.birthday : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'birthday')}}
                    />
                    {
                        birthdayValidationMessage && (
                            <span className={styles.errorMessage}>
                                {birthdayValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={`${styles.dateContainer}`}>
                    <label className={`${startDateValidationMessage ? styles.errorContainer : ""}`}>Start Date</label>
                    <TextField
                        id="start_date"
                        type="date"
                        variant="standard"
                        value={(employeeData && employeeData.start_date) ? employeeData.start_date : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'start_date')}}
                    />
                    {
                        startDateValidationMessage && (
                            <span className={styles.errorMessage}>
                                {startDateValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={`${styles.modalField} ${styles.selectContainer}`}>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Role"
                        value={(employeeData && employeeData.role) ? employeeData.role : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'role')}}
                        variant="standard"
                    >
                        {roles.map(({value, label}) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className={`${styles.modalField} ${styles.selectContainer}`}>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Position"
                        value={employeeData.position}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'position')}}
                        variant="standard"
                    >
                        {positions.map(({value, label}) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        value={(employeeData && employeeData.email) ? employeeData.email : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'email')}}
                    />
                    {
                        emailValidationMessage && (
                            <span className={styles.errorMessage}>
                                {emailValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="standard"
                        value={(employeeData && employeeData.phone) ? employeeData.phone : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'phone')}}
                    />
                    {
                        phoneValidationMessage && (
                            <span className={styles.errorMessage}>
                                {phoneValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="telegram_chat_id"
                        label="Telegram chat id"
                        variant="standard"
                        value={(employeeData && employeeData.telegram_chat_id) ? employeeData.telegram_chat_id : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'telegram_chat_id')}}
                    />
                    {
                        telegramChatIdValidationMessage && (
                            <span className={styles.errorMessage}>
                                {telegramChatIdValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="description"
                        label="Description"
                        variant="standard"
                        value={(employeeData && employeeData.description) ? employeeData.description : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'description')}}
                    />
                </div>
                <div className={styles.modalFieldMultiSelect}>
                    <MultiSelect
                        options={projectOptions}
                        handleSelectedOptions={handleSelectedOptions}
                        selectedOptions={(employeeData && employeeData.projects) ? employeeData.projects : []}
                        optionKey={'company_name'}
                        label={'Select projects'}
                    />
                </div>
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn}
                        onClick={handleClose}
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

export default EmployeeModalContent;
