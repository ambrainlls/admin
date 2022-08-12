import React, { ChangeEvent } from 'react';
import { CreateEmployeesDataTypes, EmployeesDataTypes } from '../../../redux/types';
import MultiSelect from '../../ui/multiSelect/MultiSelect';
import styles from './employeeModalComponent.module.css';

interface EmployeeModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
    projectOptions: any[];
    employeeData?: EmployeesDataTypes | CreateEmployeesDataTypes;
    handleChangeEmployeData: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => void
    handleSelectedOptions: (selectedOptionsIds: string[]) => void;
}

const EmployeeModalContent = ({
    handleClose,
    handleSave,
    projectOptions,
    employeeData,
    handleChangeEmployeData,
    handleSelectedOptions,
}: EmployeeModalContentProps) => {
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
                        value={(employeeData && employeeData.name) ? employeeData.name : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'name')}}
                        placeholder="Name"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        value={(employeeData && employeeData.surname) ? employeeData.surname : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'surname')}}
                        placeholder="Surname"
                    />
                </div>
                <div className={`${styles.dateContainer}`}>
                    <label>Birthday</label>
                    <input
                        className={styles.startDate}
                        id="birthday"
                        type="date"
                        name="birthday"
                        value={(employeeData && employeeData.birthday) ? employeeData.birthday : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'birthday')}}
                        placeholder="Birthday"
                    />
                </div>
                <div className={`${styles.dateContainer}`}>
                    <label>Start Date</label>
                    <input
                        className={styles.startDate}
                        id="start_date"
                        type="date"
                        name="start_date"
                        value={(employeeData && employeeData.start_date) ? employeeData.start_date : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'start_date')}}
                        placeholder="Start Date"
                    />
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
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={(employeeData && employeeData.email) ? employeeData.email : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'email')}}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={(employeeData && employeeData.phone) ? employeeData.phone : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'phone')}}
                        placeholder="Phone"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="telegram_chat_id"
                        type="text"
                        name="telegram_chat_id"
                        value={(employeeData && employeeData.telegram_chat_id) ? employeeData.telegram_chat_id : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'telegram_chat_id')}}
                        placeholder="Telegram chat id"
                    />
                </div>
                <div className={styles.modalField}>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        value={(employeeData && employeeData.description) ? employeeData.description : ''}
                        onChange={(evt) => {handleChangeEmployeData(evt, 'description')}}
                        placeholder="Description"
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
