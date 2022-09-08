import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetProjectDataInModal } from '../../../redux/slice/projectSlice';
import MultiSelect from '../../ui/multiSelect/MultiSelect';
import ImageUploader from '../../ui/imageUploader/ImageUploader';
import { ProjectModalComponentProps } from './ProjectModalComponent';
import deleteIcon from '../../../assets/images/delete.svg';
import styles from './ProjectModalComponent.module.css';

const ProjectModalContent = ({
    handleClose,
    handleSave,
    employeesOptions,
    projectData,
    handleChangeProjectData,
    handleChangeProjectImage,
    handleSelectedOptions,
    companyNameValidationMessage,
    nameValidationMessage,
    imageValidationMessage,
    descriptionValidationMessage,
    baseImageValidationMessage,
    logoValidationMessage,
}: ProjectModalComponentProps) => {
    const dispatch = useDispatch();

    const handleKeyDown = (e: any) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    useEffect(() => {
        return () => {
            dispatch(resetProjectDataInModal());
        };
    },[]);

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Project</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.modalField}>
                    <TextField
                        id="company_name"
                        label="Company name"
                        variant="standard"
                        value={(projectData && projectData.company_name) ? projectData.company_name : ''}
                        onChange={(evt) => {handleChangeProjectData(evt, 'company_name')}}
                    />
                    {
                        companyNameValidationMessage && (
                            <span className={styles.errorMessage}>
                                {companyNameValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="name"
                        label="Project name"
                        variant="standard"
                        value={(projectData && projectData.project_name) ? projectData.project_name : ''}
                        onChange={(evt) => {handleChangeProjectData(evt, 'project_name')}}
                    />
                    {
                        nameValidationMessage && (
                            <span className={styles.errorMessage}>
                                {nameValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.selectImageContainer}>
                    {
                        (projectData && projectData.image) ? (
                            <div className={styles.imageContainer}>
                                <img src={`${projectData.image}`} alt={'project'} />
                                <div className={`${styles.deleteImageContainer}`}
                                     onClick={() => {handleChangeProjectImage('', 'image')}}
                                >
                                    <img src={deleteIcon} alt={deleteIcon} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.imageUploaderContainer}>
                                <label htmlFor="image">
                                    <span>Choose a picture</span>
                                </label>
                                <ImageUploader handleFileChange={(evt) => {handleChangeProjectImage(evt, 'image')}} />
                                {
                                    imageValidationMessage && (
                                        <span className={styles.errorMessage}>
                                            {imageValidationMessage}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className={styles.selectImageContainer}>
                    {
                        (projectData && projectData.base_image) ? (
                            <div className={styles.imageContainer}>
                                <img src={`${projectData.base_image}`} alt={'projectBase'} />
                                <div className={`${styles.deleteImageContainer}`}
                                     onClick={() => {handleChangeProjectImage('', 'base_image')}}
                                >
                                    <img src={deleteIcon} alt={deleteIcon} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.imageUploaderContainer}>
                                <label htmlFor="baseImage">
                                    <span>Choose project responsive picture</span>
                                </label>
                                <ImageUploader handleFileChange={(evt) => {handleChangeProjectImage(evt, 'base_image')}} />
                                {
                                    baseImageValidationMessage && (
                                        <span className={styles.errorMessage}>
                                            {baseImageValidationMessage}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className={styles.selectImageContainer}>
                    {
                        (projectData && projectData.logo) ? (
                            <div className={styles.imageContainer}>
                                <img src={`${projectData.logo}`} alt={'logo'} />
                                <div className={`${styles.deleteImageContainer}`}
                                     onClick={() => {handleChangeProjectImage('', 'logo')}}
                                >
                                    <img src={deleteIcon} alt={deleteIcon} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.imageUploaderContainer}>
                                <label htmlFor="logo">
                                    <span>Choose project logo</span>
                                </label>
                                <ImageUploader handleFileChange={(evt) => {handleChangeProjectImage(evt, 'logo')}} />
                                {
                                    logoValidationMessage && (
                                        <span className={styles.errorMessage}>
                                            {logoValidationMessage}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <textarea
                        id="description"
                        name="description"
                        value={projectData.description}
                        placeholder={'Description'}
                        onKeyDown={handleKeyDown}
                        onChange={(evt) => {handleChangeProjectData(evt, 'description')}}
                    />
                    {
                        descriptionValidationMessage && (
                            <span className={styles.errorMessage}>
                                {descriptionValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalFieldMultiSelect}>
                    <MultiSelect
                        options={employeesOptions}
                        handleSelectedOptions={handleSelectedOptions}
                        selectedOptions={(projectData && projectData.employees) ? projectData.employees : []}
                        optionKey={'name'}
                        label={'Select employees'}
                    />
                </div>
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn}
                        onClick={handleClose}
                >
                    Close
                </button>
                <button className={styles.saveBtn}
                        onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default ProjectModalContent;
