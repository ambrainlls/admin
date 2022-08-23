import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobsData } from '../../../redux/slice/jobsSlice';
import { RootState } from '../../../redux';
import { JobsDataType } from '../../../redux/types';
import { JobsApi } from '../../../api/JobsApi';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import styles from './jobsLayout.module.css';

function JobsLayout () {
    const dispatch = useDispatch();
    const columns = [
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
                    <img src={row.image} alt={row.image} />
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
                            className={styles.deleteRowIcon}
                        />
                        <img
                            src={editRowIcon}
                            alt={'editRowIcon'}
                        />
                    </div>
                )
            }
        }
    ]
    const jobs = useSelector((state: RootState) => state.jobsReducer.jobsData);
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

    return (
        <div>
            <DashboardDataTable
                columns={columns}
                data={jobs}
            />
        </div>
    )
}
export default JobsLayout;