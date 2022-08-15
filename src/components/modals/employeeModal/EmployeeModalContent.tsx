import React from 'react';
import MultiSelect from '../../ui/multiSelect/MultiSelect';
import { EmployeeModalComponentProps } from './EmployeeModalComponent';
import styles from './employeeModalComponent.module.css';

const EmployeeModalContent = ({
    handleClose,
    handleSave,
    projectOptions,
    employeeData,
    handleChangeEmployeData,
    handleSelectedOptions,
    nameValidationMessage,
    surnameValidationMessage,
    birthdayValidationMessage,
    startDateValidationMessage,
    emailValidationMessage,
    phoneValidationMessage,
    telegramChatIdValidationMessage,
}: EmployeeModalComponentProps) => {
    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Employee</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.modalField}>
                    <label className={`${nameValidationMessage ? styles.errorContainer : ""}`}>Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
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
                    <label className={`${surnameValidationMessage ? styles.errorContainer : ""}`}>Surname</label>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
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
                    <input
                        className={styles.startDate}
                        id="birthday"
                        type="date"
                        name="birthday"
                        data-date-format="DD MMMM YYYY"
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
                    <input
                        className={styles.startDate}
                        id="start_date"
                        type="date"
                        name="start_date"
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
                    <label>Role</label>
                    <select
                        id="role"
                        name="role"
                        value={(employeeData && employeeData.role) ? employeeData.role : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'role')}}
                    >
                        <option value="founder">Founder</option>
                        <option value="teamleader">Teamleader</option>
                        <option value="developer">Developer</option>
                        <option value="hr">HR</option>
                        <option value="designer">Designer</option>
                        <option value="qa">QA</option>
                    </select>
                </div>
                <div className={`${styles.modalField} ${styles.selectContainer}`}>
                    <label>Position</label>
                    <select
                        id="position"
                        name="position"
                        value={(employeeData && employeeData.position) ? employeeData.position : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'position')}}
                    >
                        <option value="fullstack">Fullstack</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                </div>
                <div className={styles.modalField}>
                    <label className={`${emailValidationMessage ? styles.errorContainer : ""}`}>Email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
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
                    <label className={`${phoneValidationMessage ? styles.errorContainer : ""}`}>Phone</label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
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
                    <label className={`${telegramChatIdValidationMessage ? styles.errorContainer : ""}`}>Telegram chat id</label>
                    <input
                        id="telegram_chat_id"
                        type="text"
                        name="telegram_chat_id"
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
                    <label>Description</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
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

export default EmployeeModalContent