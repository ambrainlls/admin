import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux';
import { Modal, Box } from '@mui/material';
import DeveloperModalContent from './DeveloperModalContent';
import { setIsOpen } from '../../../redux/slice/createDeveloperModalSlice';
import styles from './createDeveloperModalComponent.module.css';

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

function CreateDeveloperModalComponent() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.createDeveloperModalReducer.isOpen);

  const handleClose = () => {
    dispatch(setIsOpen(false));
  }

  return (
    <Modal
      open={ modalState }
      onClose={ handleClose }
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box component="div" sx={style} className={styles.modalComponent}>
        <DeveloperModalContent />
      </Box>
    </Modal>
  );
}
export default CreateDeveloperModalComponent;