import { Modal, Box } from '@mui/material';
import EmployeeModalContent from './EmployeeModalContent';
import styles from './createEmployeeModalComponent.module.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 464,
    boxShadow: 24,
    pt: 2,
    pb: 3,
    px: 3,
};

interface CreateEmployeeModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
}

function CreateEmployeeModalComponent({ handleClose, handleSave }: CreateEmployeeModalComponentProps) {
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
                />
            </Box>
        </Modal>
    );
}
export default CreateEmployeeModalComponent;
