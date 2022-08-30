import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
  deleteResume,
  saveResumeData,
  setResumeData,
  setSelectedResumeId,
  updateResumeData
} from '../../../redux/slice/resumeSlice';
import { ResumeTypes} from '../../../redux/types';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import styles from './resumeLayout.module.css';

const data: ResumeTypes[] = [
    {
        id: '1',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
    {
        id: '2',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
    {
        id: '3',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
    {
        id: '10',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
    {
        id: '4',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
    {
        id: '5',
        name: 'Artur',
        surname: 'Harutyunyan',
        platform: 'https://www.make-it-in-germany.ru/',
        count: '2',
    },
];

function ResumeLayout() {
    const dispatch = useDispatch();
    const resumeData = useSelector((state: RootState) => state.resumeReducer.resumeData);
    const selectedResumeId = useSelector((state: RootState) => state.resumeReducer.selectedResumeId);

    const columns = [
        {
            name: 'Name',
            cell: (row: ResumeTypes) => {
                return (
                    <div>
                        {
                            selectedResumeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedResumeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedResumeId}
                                    value={row.name}
                                    onChange={(evt) => {handleChangeResumeData(evt, 'name', row.id)}}
                                />
                            ) : (
                                <div>{row.name}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Surname',
            cell: (row: ResumeTypes) => {
                return (
                    <div>
                        {
                            selectedResumeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedResumeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedResumeId}
                                    value={row.surname}
                                    onChange={(evt) => {handleChangeResumeData(evt, 'surname', row.id)}}
                                />
                            ) : (
                                <div>{row.surname}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Platforms where there is CV',
            cell: (row: ResumeTypes) => {
                return (
                    <div>
                        {
                            selectedResumeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedResumeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedResumeId}
                                    value={row.platform}
                                    onChange={(evt) => {handleChangeResumeData(evt, 'platform', row.id)}}
                                />
                            ) :(
                                <div>
                                    {row.platform}
                                </div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Number of resumes',
            cell: (row: ResumeTypes) => {
                return (
                    <div>
                        {
                            selectedResumeId === row.id ? (
                                <input
                                    type="number"
                                    className={`${styles.tableCell} ${row.id !== selectedResumeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedResumeId}
                                    value={row.count}
                                    onChange={(evt) => {handleChangeResumeData(evt, 'count', row.id)}}
                                />
                            ) : (
                                <div>{row.count}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'icons',
            cell: (row: ResumeTypes) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedResumeId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => dispatch(deleteResume(row.id))}
                        />
                        {
                            row.id === selectedResumeId ? (
                                <div className={styles.saveIconContainer}>
                                    <img
                                        src={saveIcon}
                                        alt={'saveIcon'}
                                        onClick={() => handleSaveChanges(row.id)}
                                    />
                                </div>
                            ) : (
                                <img
                                    src={editRowIcon}
                                    alt={'editRowIcon'}
                                    onClick={() => dispatch(setSelectedResumeId(row.id))}
                                />
                            )
                        }
                    </div>
                )
            }
        }
    ];

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(setResumeData(data));
    },[]);

    const handleChangeResumeData = (evt: ChangeEvent<HTMLInputElement>, key: string, id: string) => {
        dispatch(updateResumeData(
            {
                id,
                updatedParams: {
                    [key]: evt.target.value
                }
            }
        ));
    };

    const handleSaveChanges = (rowId: string) => {
        dispatch(saveResumeData());

        const foundIndex = resumeData.findIndex((el)=> el.id === rowId);
        console.log(resumeData[foundIndex]);
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.resumeContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
            </div>
            <DashboardDataTable
                columns={columns}
                data={resumeData}
            />
            <div className={styles.paginationContainer}>
                <DashboardPagination
                    currentPage={currentPage}
                    pageCount={pageCount}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default ResumeLayout;

