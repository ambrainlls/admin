import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteJob,
    resetJobDataInModal,
    setCreateJobDataInModal,
    setJobsData,
    setSelectedJobId
} from '../../../redux/slice/jobsSlice';
import { RootState } from '../../../redux';
import { CreateJobDataType, JobsDataType } from '../../../redux/types';
import { JobsApi } from '../../../api/JobsApi';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import JobModalComponent from '../../modals/createJobModal/JobModalComponent';
import { convertBase64 } from '../../../helpers/helpers';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createJobIcon from '../../../assets/images/createRowIcon.svg';
import styles from './jobsLayout.module.css';

function JobsLayout () {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const requiredMessage = 'The field is required !';

    const columns = [
        {
            name: 'ID',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.id}</div>
                )
            }
        },
        {
            name: 'Description',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.description}</div>
                )
            }
        },
        {
            name: 'Image',
            cell: (row: JobsDataType) => {
                return (
                    // <img src={row.image} alt={row.image} />
                    <div>{''}</div>
                )
            }
        },
        {
            name: 'Location',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.location}</div>
                )
            }
        },
        {
            name: 'Position',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.position}</div>
                )
            }
        },
        {
            name: 'Status',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.status}</div>
                )
            }
        },
        {
            name: 'Title',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.title}</div>
                )
            }
        },
        {
            name: '',
            cell: (row: JobsDataType) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedJobId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => {handleDeleteJob(row.id)}}
                        />
                        <img
                            src={editRowIcon}
                            alt={'editRowIcon'}
                            onClick={() => handleRowEdit(row.id)}
                        />
                    </div>
                )
            }
        }
    ];

    const [descriptionValidationMessage, setDescriptionValidationMessage] = useState('');
    const [imageValidationMessage, setImageValidationMessage] = useState('');
    const [locationValidationMessage, setLocationValidationMessage] = useState('');
    const [positionValidationMessage, setPositionValidationMessage] = useState('');
    const [statusValidationMessage, setStatusValidationMessage] = useState('');
    const [titleValidationMessage, setTitleValidationMessage] = useState('');
    const jobs = useSelector((state: RootState) => state.jobsReducer.jobsData);
    const createJobData = useSelector((state: RootState) => state.jobsReducer.createJobData);
    const selectedJobId = useSelector((state: RootState) => state.jobsReducer.selectedJobId);
    const [editableJob, setEditableJob] = useState<JobsDataType>(
        {
            id: '',
            description: '',
            image: null,
            location: '',
            position: '',
            status: '',
            title: '',
        }
    );

    useEffect(() => {
        setDescriptionValidationMessage('');
        setImageValidationMessage('');
        setLocationValidationMessage('');
        setPositionValidationMessage('');
        setStatusValidationMessage('');
        setTitleValidationMessage('');
    }, [showModal, selectedJobId]);

    useEffect(() => {
        JobsApi.getJobs()
            .then(res => {
                const { data } = res;
                dispatch(setJobsData(data));
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    }, []);

    const handleCloseCreateJobModal = () => {
        setShowModal(false);
        dispatch(resetJobDataInModal());
    };

    const handleChangeCreateJobData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => {
        dispatch(setCreateJobDataInModal({[key]: evt.target.value}));
    };

    const handleChangeUpdateJobData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => {
        const updatedJob = {
            ...editableJob,
            [key]: evt.target.value
        };

        setEditableJob(updatedJob);
    };

    const handleChangeJobImage = async (evt: React.ChangeEvent<HTMLInputElement>, key: string) => {
        if (evt && evt.target && evt.target.files && evt.target.files[0]) {
            const convertedImage = await convertBase64(evt.target.files[0]);
            dispatch(setCreateJobDataInModal({[key]: convertedImage}));
        }
    };

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedJobId(rowId));

        const foundIndex = jobs.findIndex((el) => el.id === rowId);

        setEditableJob(jobs[foundIndex])
    };

    const handleCloseUpdateJobModal = () => {
        dispatch(setSelectedJobId(''));
    };

    const handleValidationErrors = (jobsData: JobsDataType | CreateJobDataType) => {
        if (!jobsData.description) {
            setDescriptionValidationMessage(requiredMessage);

            return;
        } else {
            setDescriptionValidationMessage('');
        }

        if (!jobsData.image) {
            setImageValidationMessage('You have not selected an image');

            return;
        } else {
            setImageValidationMessage('');
        }

        if (!jobsData.location) {
            setLocationValidationMessage(requiredMessage);

            return;
        } else {
            setLocationValidationMessage('');
        }

        if (!jobsData.position) {
            setPositionValidationMessage(requiredMessage);

            return;
        } else {
            setPositionValidationMessage('');
        }

        if (!jobsData.status) {
            setStatusValidationMessage(requiredMessage);

            return;
        } else {
            setStatusValidationMessage('');
        }

        if (!jobsData.title) {
            setTitleValidationMessage(requiredMessage);

            return;
        } else {
            setTitleValidationMessage('');
        }

        return true;
    };

    const handleSaveChanges = () => {
        const hasError = !handleValidationErrors(editableJob);

        if (hasError) {
            return;
        }

        JobsApi.updateJob(editableJob)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    };

    const handleCreateJob = () => {
        const hasError = !handleValidationErrors(createJobData);

        if (hasError) {
            return;
        }

        JobsApi.createJob(createJobData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    };

    const handleDeleteJob = (jobId: string) => {
        JobsApi.deleteJob(jobId)
            .then(res => {
                dispatch(deleteJob(jobId))
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    };

    return (
        <div>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
                <div className={styles.createJobWrapper} onClick={() => {setShowModal(!showModal)}}>
                    <span>Create</span>
                    <img src={createJobIcon} alt={'createJobIcon'}/>
                </div>
            </div>
            <DashboardDataTable
                columns={columns}
                data={jobs}
            />
            {
                showModal && (
                    <JobModalComponent
                        handleClose={handleCloseCreateJobModal}
                        handleSave={handleCreateJob}
                        handleChangeJobData={handleChangeCreateJobData}
                        handleChangeJobImage={handleChangeJobImage}
                        jobData={createJobData}
                        descriptionValidationMessage={descriptionValidationMessage}
                        imageValidationMessage={imageValidationMessage}
                        locationValidationMessage={locationValidationMessage}
                        positionValidationMessage={positionValidationMessage}
                        statusValidationMessage={statusValidationMessage}
                        titleValidationMessage={titleValidationMessage}
                    />
                )
            }
            {
                selectedJobId && (
                    <JobModalComponent
                        handleClose={handleCloseUpdateJobModal}
                        handleSave={handleSaveChanges}
                        handleChangeJobData={handleChangeUpdateJobData}
                        handleChangeJobImage={handleChangeJobImage}
                        jobData={editableJob}
                        descriptionValidationMessage={descriptionValidationMessage}
                        imageValidationMessage={imageValidationMessage}
                        locationValidationMessage={locationValidationMessage}
                        positionValidationMessage={positionValidationMessage}
                        statusValidationMessage={statusValidationMessage}
                        titleValidationMessage={titleValidationMessage}
                    />
                )
            }
        </div>
    )
}
export default JobsLayout;
