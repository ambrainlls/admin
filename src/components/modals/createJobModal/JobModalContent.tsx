import React, { useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { positions } from '../../../helpers/helpers';
import { CreateJobDataType } from '../../../redux/types';
import styles from './JobModalComponent.module.css';

interface JobModalContentProps {
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

const JobModalContent = ({
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
}: JobModalContentProps) => {

    const [descriptionValue, setDescriptionValue] = useState('');
    const [ file, setFile ] = useState<File | null>(null);
    const [ sendFileSuccess, setSendFileSuccess ] = useState(false);
    const [ sendFileError, setSendFileError ] = useState(null);
    // const buttonClasses = `${props.className} ${sendFileSuccess ? 'success' : ''}`.trim();

    const handleChangeDescription = (evt: React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setDescriptionValue(evt.target.value);
        handleChangeJobData(evt, 'description');
    }

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    //     const file = event.target.files[0];
    //     setFile(file);
    //     handleChangeJobImage(event, key);
    // };
    //
    const resetState = () => {
        setFile(null);
        setSendFileSuccess(false);
        setSendFileError(null);
    };

    const handleKeyDown = (e: any) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Job</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.modalField}>
                    <textarea
                        id="description"
                        name="description"
                        value={descriptionValue}
                        placeholder={'Description'}
                        onKeyDown={handleKeyDown}
                        onChange={(evt) => {handleChangeDescription(evt, 'description')}}
                    />
                    {
                        descriptionValidationMessage && (
                            <span className={styles.errorMessage}>
                                {descriptionValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.selectImageContainer}>
                    <label
                        htmlFor="image"
                        onClick={resetState}
                    >
                        <span>Choose a picture</span>
                    </label>
                    <input
                        onChange={(evt) => {handleChangeJobImage(evt, 'image')}}
                        type="file"
                        id="image"
                        accept="image/*"
                    />
                    {
                        imageValidationMessage && (
                            <span className={styles.errorMessage}>
                                {imageValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="location"
                        label="Location"
                        variant="standard"
                        value={(jobData && jobData.location) ? jobData.location : ''}
                        onChange={(evt) => {handleChangeJobData(evt, 'location')}}
                    />
                    {
                        locationValidationMessage && (
                            <span className={styles.errorMessage}>
                                {locationValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={`${styles.modalField} ${styles.selectContainer}`}>
                    <TextField
                        id="position"
                        select
                        label="Position"
                        value={(jobData && jobData.position) ? jobData.position : ''}
                        onChange={(evt) => {handleChangeJobData(evt, 'position')}}
                        variant="standard"
                    >
                        {positions.map(({value, label}) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                    {
                        positionValidationMessage && (
                            <span className={styles.errorMessage}>
                                {positionValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="status"
                        label="Status"
                        variant="standard"
                        value={(jobData && jobData.status) ? jobData.status : ''}
                        onChange={(evt) => {handleChangeJobData(evt, 'status')}}
                    />
                    {
                        statusValidationMessage && (
                            <span className={styles.errorMessage}>
                                {statusValidationMessage}
                            </span>
                        )
                    }
                </div>
                <div className={styles.modalField}>
                    <TextField
                        id="title"
                        label="Title"
                        variant="standard"
                        value={(jobData && jobData.title) ? jobData.title : ''}
                        onChange={(evt) => {handleChangeJobData(evt, 'title')}}
                    />
                    {
                        titleValidationMessage && (
                            <span className={styles.errorMessage}>
                                {titleValidationMessage}
                            </span>
                        )
                    }
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

export default JobModalContent
