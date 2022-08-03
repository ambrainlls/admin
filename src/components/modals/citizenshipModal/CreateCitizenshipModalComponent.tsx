import { Modal, Box } from '@mui/material';
import CitizenshipModalContent from '../citizenshipModal/CitizenshipModalContent';
import styles from './citizenshipModal.module.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    boxShadow: 24,
};

interface CreateCitizenshipModalComponentProps {
    handleClose: () => void;
    handleSave: (selectedCountriesIds: string[]) => void;
    countries: any;
}

function CreateCitizenshipModalComponent({ handleClose, handleSave, countries }: CreateCitizenshipModalComponentProps) {

    return (
        <Modal
            open={ true }
            onClose={ handleClose }
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box component="div" sx={style} className={styles.modalComponent}>
                <CitizenshipModalContent
                    handleClose={handleClose}
                    handleSave={handleSave}
                    countries={countries}
                />
            </Box>
        </Modal>
    );
}
export default CreateCitizenshipModalComponent;
