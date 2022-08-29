import React from 'react';
import { Modal, Box } from '@mui/material';
import { CreateEmployeesDataTypes, EmployeesDataTypes } from '../../../redux/types';
import EmployeeModalContent from './EmployeeModalContent';
import styles from './employeeModalComponent.module.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 464,
    maxHeight: '80vh',
    minHeight: 350,
    overflowY: 'auto',
    boxShadow: 24,
    pt: 2,
    pb: 3,
    px: 3,
};

export interface EmployeeModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
    projectOptions: any[];
    employeeData: EmployeesDataTypes | CreateEmployeesDataTypes;
    handleChangeEmployeData: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => void
    handleSelectedOptions: (selectedOptionsIds: string[]) => void;
    nameValidationMessage: string;
    surnameValidationMessage: string;
    birthdayValidationMessage: string;
    startDateValidationMessage: string;
    emailValidationMessage: string;
    phoneValidationMessage: string;
    telegramChatIdValidationMessage: string;
}

function EmployeeModalComponent({
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
}: EmployeeModalComponentProps) {
    return (
        <Modal
            open={ true }
            onClose={ handleClose }
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box component="div" sx={style} className={styles.modalComponent}>
                <EmployeeModalContent
                    handleClose={handleClose}
                    handleSave={handleSave}
                    projectOptions={projectOptions}
                    employeeData={employeeData}
                    handleSelectedOptions={handleSelectedOptions}
                    handleChangeEmployeData={handleChangeEmployeData}
                    nameValidationMessage={nameValidationMessage}
                    surnameValidationMessage={surnameValidationMessage}
                    birthdayValidationMessage={birthdayValidationMessage}
                    startDateValidationMessage={startDateValidationMessage}
                    emailValidationMessage={emailValidationMessage}
                    phoneValidationMessage={phoneValidationMessage}
                    telegramChatIdValidationMessage={telegramChatIdValidationMessage}
                />
            </Box>
        </Modal>
    );
}
export default EmployeeModalComponent;
