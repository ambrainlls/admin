import React from 'react';
import { Modal, Box } from '@mui/material';
import { EmployeesDataTypes } from '../../../redux/types';
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
    employeeData: EmployeesDataTypes;
    handleChangeEmployeeImage: (image: string, key: string) => void;
    handleChangeEmployeData: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => void
    handleSelectedOptions: (selectedOption: any) => void;
    nameValidationMessage: string;
    surnameValidationMessage: string;
    birthdayValidationMessage: string;
    startDateValidationMessage: string;
    emailValidationMessage: string;
    imageValidationMessage: string;
    phoneValidationMessage: string;
    telegramChatIdValidationMessage: string;
}

function EmployeeModalComponent({
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
    imageValidationMessage,
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
                    handleChangeEmployeeImage={handleChangeEmployeeImage}
                    nameValidationMessage={nameValidationMessage}
                    surnameValidationMessage={surnameValidationMessage}
                    imageValidationMessage={imageValidationMessage}
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
