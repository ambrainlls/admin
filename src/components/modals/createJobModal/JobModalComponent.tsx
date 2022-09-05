import React from 'react';
import { Modal, Box } from '@mui/material';
import { JobsDataType } from '../../../redux/types';
import JobModalContent from './JobModalContent';
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

export interface JobModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
    handleChangeJobData: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => void;
    handleChangeJobRequirements: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) => void;
    handleDeleteJobRequirements: (evt: React.MouseEvent<HTMLImageElement>, id: string) => void;
    handleChangeJobImage: (image: string, key: string) => void;
    addRequirements: () => void;
    jobData: JobsDataType;
    descriptionValidationMessage: string;
    workTimeValidationMessage: string;
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
    handleChangeJobRequirements,
    handleDeleteJobRequirements,
    handleChangeJobImage,
    addRequirements,
    jobData,
    descriptionValidationMessage,
    workTimeValidationMessage,
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
                    handleDeleteJobRequirements={handleDeleteJobRequirements}
                    handleChangeJobImage={handleChangeJobImage}
                    handleChangeJobRequirements={handleChangeJobRequirements}
                    addRequirements={addRequirements}
                    jobData={jobData}
                    descriptionValidationMessage={descriptionValidationMessage}
                    imageValidationMessage={imageValidationMessage}
                    workTimeValidationMessage={workTimeValidationMessage}
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
