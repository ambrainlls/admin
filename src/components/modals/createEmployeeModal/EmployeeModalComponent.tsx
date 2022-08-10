import { Modal, Box } from '@mui/material';
import EmployeeModalContent from './EmployeeModalContent';
import styles from './employeeModalComponent.module.css';
import {CreateEmployeesDataTypes, EmployeesDataTypes} from "../../../redux/types";
import {ChangeEvent} from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 464,
    height: 700,
    overflowY: 'auto',
    boxShadow: 24,
    pt: 2,
    pb: 3,
    px: 3,
};

interface CreateEmployeeModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
    projectOptions: any[];
    employeeData: EmployeesDataTypes | CreateEmployeesDataTypes;
    handleChangeEmployeData: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => void
    handleSelectedOptions: (selectedOptionsIds: string[]) => void;
}

function EmployeeModalComponent({
    handleClose,
    handleSave,
    projectOptions,
    employeeData,
    handleChangeEmployeData,
    handleSelectedOptions,
}: CreateEmployeeModalComponentProps) {
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
                />
            </Box>
        </Modal>
    );
}
export default EmployeeModalComponent;
