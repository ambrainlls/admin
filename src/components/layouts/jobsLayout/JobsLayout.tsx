import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {uniqueId} from 'lodash';
import {
    addNewJob,
    addNewRequirement,
    deleteJob,
    deleteJobRequirement,
    resetJobDataInModal,
    saveUpdatedJobData,
    setCreateJobDataInModal,
    setJobsData,
    setSelectedJobId,
    updateJobRequirement,
} from '../../../redux/slice/jobsSlice';
import {RootState} from '../../../redux';
import {JobsDataType, Requirements} from '../../../redux/types';
import {JobsApi} from '../../../api/JobsApi';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import JobModalComponent from '../../modals/createJobModal/JobModalComponent';
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
            name: 'Title',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.title}</div>
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
            name: 'Work time',
            cell: (row: JobsDataType) => {
                return (
                    <div>{row.work_time}</div>
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
            name: 'Requirements',
            cell: (row: JobsDataType) => {
                return row.requirements.map(item => (
                   <div key={item.id} className={styles.responsveWidt}>{item.name},</div>
                ))
            }
        },
        {
            name: 'Description',
            cell: (row: JobsDataType) => {
                return (
                    <div className={styles.responsveWidt}>{row.description}</div>
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

    const jobs = useSelector((state: RootState) => state.jobsReducer.jobsData);
    const createJobData = useSelector((state: RootState) => state.jobsReducer.createJobData);
    const selectedJobId = useSelector((state: RootState) => state.jobsReducer.selectedJobId);

    const [descriptionValidationMessage, setDescriptionValidationMessage] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [imageValidationMessage, setImageValidationMessage] = useState('');
    const [locationValidationMessage, setLocationValidationMessage] = useState('');
    const [workTimeValidationMessage, setWorkTimeValidationMessage] = useState('');
    const [positionValidationMessage, setPositionValidationMessage] = useState('');
    const [statusValidationMessage, setStatusValidationMessage] = useState('');
    const [titleValidationMessage, setTitleValidationMessage] = useState('');
    const [editableJob, setEditableJob] = useState<JobsDataType>(
        {
            id: '',
            description: '',
            image: '',
            location: '',
            position: '',
            status: '',
            title: '',
            work_time: '',
            requirements: [],
        }
    );

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        setDescriptionValidationMessage('');
        setImageValidationMessage('');
        setLocationValidationMessage('');
        setPositionValidationMessage('');
        setStatusValidationMessage('');
        setTitleValidationMessage('');
    }, [showModal, selectedJobId]);

    const getJobs = (value?: string) => {
        JobsApi.getJobs(value)
        .then(res => {
            const { data } = res.data;
            const { current_page, last_page } = res.data.meta;

            const jobs = data.map((el: any) => {
                el.requirements = JSON.parse(el.requirements).map((item: any) => {
                    return {
                        id: uniqueId(),
                        name: item
                    };
                });

                return el;
            });

            setCurrentPage(current_page);
            setPageCount(last_page);

            dispatch(setJobsData(jobs));
        })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    };

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

    const handleCreateJobImage = async (img: string, key: string) => {
        dispatch(setCreateJobDataInModal({[key]: img}));
    };

    const handleChangeJobImage = async (img: string, key: string) => {
        const updatedJob = {
            ...editableJob,
            [key]: img,
        };

        setEditableJob(updatedJob);
    };

    const addRequirementsToUpdateJob = () => {
        const updatedJob = {...editableJob};

        if (!updatedJob.requirements) {
            updatedJob.requirements = [];
        }

        updatedJob.requirements = [
            ...updatedJob.requirements,
            {
                id: `_${uniqueId()}`,
                name: ''
            }
        ];

        setEditableJob(updatedJob);
    };

    const handleChangeUpdateJobRequirements = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        const updatedJob = {...editableJob};
        const foundIndex = updatedJob.requirements.findIndex((item: Requirements) => item.id === id);

        if (foundIndex === -1) {
            return;
        }

        updatedJob.requirements = [...updatedJob.requirements];

        updatedJob.requirements[foundIndex] = {
            ...updatedJob.requirements[foundIndex],
            name: evt.target.value
        };

        setEditableJob(updatedJob);
    };

    const handleDeleteUpdateJobRequirements = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
        const updatedJob = {...editableJob};
        const foundIndex = updatedJob.requirements.findIndex((item: Requirements) => item.id === id);

        if (foundIndex === -1) {
            return;
        }

        updatedJob.requirements = [...updatedJob.requirements];

        updatedJob.requirements.splice(foundIndex, 1);

        setEditableJob(updatedJob);
    };

    const addRequirementsToCreateJob = () => {
        dispatch(addNewRequirement());
    };

    const handleChangeCreateJobRequirements = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        dispatch(updateJobRequirement({
            id,
            name: evt.target.value
        }));
    };

    const handleDeleteCreateJobRequirements = (evt: React.MouseEvent<HTMLImageElement>, id: string) => {
        dispatch(deleteJobRequirement(id));
    };

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedJobId(rowId));

        const foundIndex = jobs.findIndex((el) => el.id === rowId);

        setEditableJob(jobs[foundIndex]);
    };

    const handleCloseUpdateJobModal = () => {
        dispatch(setSelectedJobId(''));
    };

    const handleValidationErrors = (jobsData: JobsDataType) => {
        if (!jobsData.title) {
            setTitleValidationMessage(requiredMessage);

            return;
        } else {
            setTitleValidationMessage('');
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

        if (!jobsData.work_time) {
            setWorkTimeValidationMessage(requiredMessage);

            return;
        } else {
            setWorkTimeValidationMessage('');
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

        if (!jobsData.description) {
            setDescriptionValidationMessage(requiredMessage);

            return;
        } else {
            setDescriptionValidationMessage('');
        }

        return true;
    };

    const handleSaveChanges = () => {
        const hasError = !handleValidationErrors(editableJob);

        if (hasError) {
            return;
        }

        const requirements = editableJob.requirements.map(item => item.name);

        const updatedData = {
            ...editableJob,
            requirements: JSON.stringify(requirements),
        }

        JobsApi.updateJob(updatedData)
        .then(res => {
            const updatedParam = {...res.data};

            updatedParam.requirements = JSON.parse(updatedParam.requirements);

            updatedParam.requirements = updatedParam.requirements.map((item: string) => {
                return {
                    id: `_${uniqueId()}`,
                    name: item
                }
            });

            dispatch(saveUpdatedJobData(updatedParam));
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

        const requirements = createJobData.requirements.map(item => item.name);

        const createdData = {
            ...createJobData,
            requirements: JSON.stringify(requirements),
        };

        JobsApi.createJob(createdData)
        .then(res => {
            const createdData: any = {...res.data};

            createdData.requirements = JSON.parse(res.data.requirements);

            createdData.requirements = createdData.requirements.map((item: string) => {
                return {
                    id: `_${uniqueId()}`,
                    name: item
                }
            });

            dispatch(addNewJob(createdData));
            setShowModal(false);
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

    const handleSearchJob = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setSearchValue(value);
        setCurrentPage(1);
        getJobs(`?q=${value}`);
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);

        getJobs(`?q=${searchValue}&page=${page}`);
    };

    return (
        <div>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={handleSearchJob}
                />
                <div className={styles.createJobWrapper} onClick={() => {setShowModal(!showModal)}}>
                    <span>Create</span>
                    <img src={createJobIcon} alt={'createJobIcon'} />
                </div>
            </div>
            <DashboardDataTable
                columns={columns}
                data={jobs}
            />
            <div className={styles.paginationContainer}>
                <DashboardPagination
                    currentPage={currentPage}
                    pageCount={pageCount}
                    handlePageChange={handlePageChange}
                />
            </div>
            {
                showModal && (
                    <JobModalComponent
                        handleClose={handleCloseCreateJobModal}
                        handleSave={handleCreateJob}
                        handleChangeJobData={handleChangeCreateJobData}
                        handleDeleteJobRequirements={handleDeleteCreateJobRequirements}
                        handleChangeJobImage={handleCreateJobImage}
                        handleChangeJobRequirements={handleChangeCreateJobRequirements}
                        addRequirements={addRequirementsToCreateJob}
                        jobData={createJobData}
                        descriptionValidationMessage={descriptionValidationMessage}
                        imageValidationMessage={imageValidationMessage}
                        workTimeValidationMessage={workTimeValidationMessage}
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
                        handleChangeJobRequirements={handleChangeUpdateJobRequirements}
                        handleDeleteJobRequirements={handleDeleteUpdateJobRequirements}
                        addRequirements={addRequirementsToUpdateJob}
                        jobData={editableJob}
                        descriptionValidationMessage={descriptionValidationMessage}
                        workTimeValidationMessage={workTimeValidationMessage}
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
