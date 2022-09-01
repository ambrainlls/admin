import { Modal, Box } from '@mui/material';
import ProjectModalContent from './ProjectModalContent';
import { ProjectTypes } from '../../../redux/types';
import React from 'react';
import styles from './ProjectModalComponent.module.css';

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

interface ProjectModalComponentProps {
    handleClose: () => void;
    handleSave: () => void;
    employeesOptions: any[];
    projectData?: ProjectTypes;
    handleChangeProjectData: (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => void
    handleSelectedOptions: (selectedOption: any) => void;
}

function ProjectModalComponent({
    handleClose,
    handleSave,
    employeesOptions,
    projectData,
    handleChangeProjectData,
    handleSelectedOptions
}: ProjectModalComponentProps) {
    return (
        <Modal
            open={ true }
            onClose={ handleClose }
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box component="div" sx={style} className={styles.modalComponent}>
                <ProjectModalContent
                    handleClose={handleClose}
                    handleSave={handleSave}
                    employeesOptions={employeesOptions}
                    projectData={projectData}
                    handleChangeProjectData={handleChangeProjectData}
                    handleSelectedOptions={handleSelectedOptions}
                />
            </Box>
        </Modal>
    )
}

export default ProjectModalComponent;
