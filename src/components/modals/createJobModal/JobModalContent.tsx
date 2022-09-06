import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';
import { positions } from '../../../helpers/helpers';
import { resetJobDataInModal } from '../../../redux/slice/jobsSlice';
import { JobModalComponentProps } from './JobModalComponent';
import ImageUploader from '../../ui/imageUploader/ImageUploader';
import deleteIcon from '../../../assets/images/delete.svg';
import styles from './JobModalComponent.module.css';

const JobModalContent = ({
    handleClose,
    handleSave,
    handleChangeJobData,
    handleChangeJobImage,
    handleChangeJobRequirements,
    handleDeleteJobRequirements,
    addRequirements,
    jobData,
    descriptionValidationMessage,
    imageValidationMessage,
    locationValidationMessage,
    positionValidationMessage,
    statusValidationMessage,
    workTimeValidationMessage,
    titleValidationMessage,
}: JobModalComponentProps) => {
    const dispatch = useDispatch();

    const handleKeyDown = (e: any) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    useEffect(() => {
        return () => {
            dispatch(resetJobDataInModal());
        };
    },[]);

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Job</p>
            </div>
            <div className={styles.fieldsToFill}>
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
                <div className={styles.selectImageContainer}>
                    {
                        jobData.image ? (
                            <div className={styles.imageContainer}>
                                <img src={`${jobData.image}`} alt={'job'} />
                                <div className={`${styles.deleteImageContainer}`}
                                     onClick={() => {handleChangeJobImage('', 'image')}}
                                >
                                    <img src={deleteIcon} alt={deleteIcon} />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.imageUploaderContainer}>
                                <label htmlFor="image">
                                    <span>Choose a picture</span>
                                </label>
                                <ImageUploader handleFileChange={(evt) => {handleChangeJobImage(evt, 'image')}} />
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
                <div className={styles.modalField}>
                    <TextField
                        id="work_time"
                        label="Work time"
                        variant="standard"
                        value={(jobData && jobData.work_time) ? jobData.work_time : ''}
                        onChange={(evt) => {handleChangeJobData(evt, 'work_time')}}
                    />
                    {
                        workTimeValidationMessage && (
                            <span className={styles.errorMessage}>
                                {workTimeValidationMessage}
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
                    {
                        jobData.requirements && (
                            jobData.requirements.map((item,i )=> (
                                <div className={styles.requirementsItem} key={i}>
                                    <TextField
                                        id="requirements"
                                        name="requirements"
                                        variant="outlined"
                                        value={item.name}
                                        onChange={evt =>handleChangeJobRequirements(evt, item.id)}
                                    />
                                    <img src={deleteIcon} alt={deleteIcon}
                                        onClick={(evt) => handleDeleteJobRequirements(evt, item.id)}
                                    />
                                </div>
                            ))
                        )
                    }
                    <span className={styles.addRequirements} onClick={addRequirements}>
                        Add requirements
                    </span>
                </div>
                <div className={styles.modalField}>
                    <textarea
                        id="description"
                        name="description"
                        value={jobData.description}
                        placeholder={'Description'}
                        onKeyDown={handleKeyDown}
                        onChange={(evt) => {handleChangeJobData(evt, 'description')}}
                    />
                    {
                        descriptionValidationMessage && (
                            <span className={styles.errorMessage}>
                                {descriptionValidationMessage}
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
