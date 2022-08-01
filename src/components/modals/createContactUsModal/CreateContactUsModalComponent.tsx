import { Modal, Box } from '@mui/material';
import ContactUsModalContent from './ContactUsModalContent';
import styles from './createContactUsModalComponent.module.css';

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

function CreateContactUsModalComponent({ handleClose, handleSave }: CreateEmployeeModalComponentProps) {
    return (
        <Modal
            open={ true }
            onClose={ handleClose }
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box component="div" sx={style} className={styles.modalComponent}>
                <ContactUsModalContent
                    handleClose={handleClose}
                    handleSave={handleSave}
                />
            </Box>
        </Modal>
    );
}
export default CreateContactUsModalComponent;
