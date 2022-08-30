import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
  deleteFeedback, saveFeedbackData,
  setFeedbackData,
  setSelectedFeedbackId,
  updateFeedbackData
} from '../../../redux/slice/feedbackSlice';
import { FeedbackTypes } from '../../../redux/types';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import styles from './feedbackLayout.module.css';

const data: FeedbackTypes[] = [
    {
        id: '1',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
    {
        id: '2',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
    {
        id: '3',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
    {
        id: '10',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
    {
        id: '4',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
    {
        id: '5',
        name: 'Artur',
        surname: 'Harutyunyan',
        email: 'a@mail.ru',
        feedback: 'string',
    },
];

function FeedbackLayout() {
    const dispatch = useDispatch();
    const feedbackData = useSelector((state: RootState) => state.feedbackReducer.feedbackData);
    const selectedFeedbackId = useSelector((state: RootState) => state.feedbackReducer.selectedFeedbackId);

    const columns = [
        {
            name: 'Name',
            cell: (row: FeedbackTypes) => {
                return (
                    <div>
                        {
                            selectedFeedbackId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedFeedbackId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedFeedbackId}
                                    value={row.name}
                                    onChange={(evt) => {handleChangeFeedbackData(evt, 'name', row.id)}}
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
            cell: (row: FeedbackTypes) => {
                return (
                    <div>
                        {
                            selectedFeedbackId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedFeedbackId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedFeedbackId}
                                    value={row.surname}
                                    onChange={(evt) => {handleChangeFeedbackData(evt, 'surname', row.id)}}
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
            name: 'Email',
            cell: (row: FeedbackTypes) => {
                return (
                    <div>
                        {
                            selectedFeedbackId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedFeedbackId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedFeedbackId}
                                    value={row.email}
                                    onChange={(evt) => {handleChangeFeedbackData(evt, 'email', row.id)}}
                                />
                            ) :(
                                <div>{row.email}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Feedback',
            cell: (row: FeedbackTypes) => {
                return (
                    <div>
                        {
                            selectedFeedbackId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedFeedbackId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedFeedbackId}
                                    value={row.feedback}
                                    onChange={(evt) => {handleChangeFeedbackData(evt, 'feedback', row.id)}}
                                />
                            ) : (
                                <div>{row.feedback}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'icons',
            cell: (row: FeedbackTypes) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedFeedbackId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => dispatch(deleteFeedback(row.id))}
                        />
                        {
                            row.id === selectedFeedbackId ? (
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
                                    onClick={() => dispatch(setSelectedFeedbackId(row.id))}
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
        dispatch(setFeedbackData(data));
    },[]);

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleChangeFeedbackData = (evt: ChangeEvent<HTMLInputElement>, key: string, id: string) => {
        dispatch(updateFeedbackData(
            {
                id,
                updatedParams: {
                    [key]: evt.target.value
                }
            }
        ));
    };

    const handleSaveChanges = (rowId: string) => {
        dispatch(saveFeedbackData());

        const foundIndex = feedbackData.findIndex((el)=> el.id === rowId);
        console.log(feedbackData[foundIndex]);
    };

    return (
        <div className={styles.feedbackContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
            </div>
            <DashboardDataTable
                columns={columns}
                data={feedbackData}
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

export default FeedbackLayout;

