import { Modal, Box } from '@mui/material';
import JobModalContent from './JobModalContent';
import React from 'react';
import { CreateJobDataType } from '../../../redux/types';
import styles from './JobModalComponent.module.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 464,
    maxHeight: '50vh',
    minHeight: 350,
    overflowY: 'auto',
    boxShadow: 24,
    pt: 2,
    pb: 3,
    px: 3,
};

interface JobModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
    handleChangeJobData: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => void;
    handleChangeJobImage: (evt: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    jobData: CreateJobDataType;
    descriptionValidationMessage: string;
    imageValidationMessage: string;
    locationValidationMessage: string;
    positionValidationMessage: string;
    statusValidationMessage: string;
    titleValidationMessage: string;
}

function JobModalComponent({
    handleClose,
    handleSave,
    handleChangeJobData,
    handleChangeJobImage,
    jobData,
    descriptionValidationMessage,
    imageValidationMessage,
    locationValidationMessage,
    positionValidationMessage,
    statusValidationMessage,
    titleValidationMessage,
}: JobModalComponentProps) {
    return (
        <Modal
            open={ true }
            onClose={ handleClose }
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box component="div" sx={style} className={styles.modalComponent}>
                <JobModalContent
                    handleClose={handleClose}
                    handleSave={handleSave}
                    handleChangeJobData={handleChangeJobData}
                    handleChangeJobImage={handleChangeJobImage}
                    jobData={jobData}
                    descriptionValidationMessage={descriptionValidationMessage}
                    imageValidationMessage={imageValidationMessage}
                    locationValidationMessage={locationValidationMessage}
                    positionValidationMessage={positionValidationMessage}
                    statusValidationMessage={statusValidationMessage}
                    titleValidationMessage={titleValidationMessage}
                />
            </Box>
        </Modal>
    )
}

export default JobModalComponent;