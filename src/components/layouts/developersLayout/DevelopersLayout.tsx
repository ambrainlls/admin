import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
    deleteDeveloper,
    setDevelopersData,
    setSelectedDeveloperId,
    saveDeveloperData,
    updateDeveloperData,
} from '../../../redux/slice/developersSlice';
import { DevelopersDataTypes } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import styles from './developersLayout.module.css';

const data: DevelopersDataTypes[] = [
    {
        id: '1',
        name: 'Artur',
        surname: 'Harutyunyan',
        developer: 'Full Stack Developer',
        beginning: '12.07.2020',
        jobTitle: 'Founder',
    },
    {
        id: '2',
        name: 'Mihran',
        surname: 'Minasyan',
        developer: 'DevOps engineer',
        beginning: '12.07.2020',
        jobTitle: 'Founder',
    },
    {
        id: '3',
        name: 'Armen',
        surname: 'Asatryan',
        developer: 'Full Stack Developer',
        beginning: '12.07.2020',
        jobTitle: 'Team Lead',
    },
    {
        id: '10',
        name: 'Tatev',
        surname: 'Grigoryan',
        developer: 'Frontend Developer',
        beginning: '12.07.2020',
        jobTitle: 'Team Lead',
    },
    {
        id: '4',
        name: 'Hovhannes',
        surname: 'Aleksanyan',
        developer: 'Full Stack Developer',
        beginning: '12.07.2020',
        jobTitle: 'TeamLead',
    },
    {
        id: '5',
        name: 'Karlen',
        surname: 'Levonyan',
        developer: 'Backend Developer',
        beginning: '12.07.2020',
        jobTitle: 'Developer',
    },
    {
        id: '6',
        name: 'Vahe',
        surname: 'Amiraghyan',
        developer: 'Full Stack Developer',
        beginning: '12.07.2020',
        jobTitle: 'Developer',
    },
    {
        id: '7',
        name: 'Narek',
        surname: 'Sargsyan',
        developer: 'Backend Developer',
        beginning: '12.07.2020',
        jobTitle: 'Developer',
    },
    {
        id: '8',
        name: 'Sona',
        surname: 'Babaxanyan',
        developer: 'Frontend Developer',
        beginning: '12.07.2020',
        jobTitle: 'Developer',
    },
    {
        id: '9',
        name: 'Artur',
        surname: 'Harutyunyan',
        developer: 'Full Stack Developer',
        beginning: '12.07.2020',
        jobTitle: 'Founder',
    },
];

function DevelopersLayout() {
    const dispatch = useDispatch();
    const developersData = useSelector((state: RootState) => state.developersReducer.developersData);
    const selectedDeveloperId = useSelector((state: RootState) => state.developersReducer.selectedDeveloperId);

    const columns = [
        {
            name: 'Name',
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div>
                        {
                            selectedDeveloperId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedDeveloperId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedDeveloperId}
                                    value={row.name}
                                    onChange={(evt) => {handleChangeDeveloperData(evt, 'name', row.id)}}
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
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div>
                        {
                            selectedDeveloperId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedDeveloperId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedDeveloperId}
                                    value={row.surname}
                                    onChange={(evt) => {handleChangeDeveloperData(evt, 'surname', row.id)}}
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
            name: 'Developer',
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div>
                        {
                            selectedDeveloperId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedDeveloperId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedDeveloperId}
                                    value={row.developer}
                                    onChange={(evt) => {handleChangeDeveloperData(evt, 'developer', row.id)}}
                                />
                            ) : (
                                <div>{row.developer}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Beginning',
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div>
                        {
                            selectedDeveloperId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedDeveloperId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedDeveloperId}
                                    value={row.beginning}
                                    onChange={(evt) => {handleChangeDeveloperData(evt, 'beginning', row.id)}}
                                />
                            ) : (
                                <div>{row.beginning}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Job title',
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div>
                        { selectedDeveloperId === row.id ? (
                            <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedDeveloperId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedDeveloperId}
                                    value={row.jobTitle}
                                    onChange={(evt) => {handleChangeDeveloperData(evt, 'jobTitle', row.id)}}
                            />
                        ) : (
                            <div>{row.jobTitle}</div>
                        )
                    }
                    </div>
                )
            }
        },
        {
            name: '',
            cell: (row: DevelopersDataTypes) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedDeveloperId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => dispatch(deleteDeveloper(row.id))}
                        />
                        {
                            row.id === selectedDeveloperId ? (
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
                                    onClick={() => dispatch(setSelectedDeveloperId(row.id))}
                                />
                            )
                        }
                    </div>
                )
            }
        }
    ];

    useEffect(() => {
        dispatch(setDevelopersData(data));
    },[]);

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeDeveloperData = (evt: ChangeEvent<HTMLInputElement>, key: string, id: string) => {
        dispatch(updateDeveloperData(
            {
                id,
                updatedParams: {
                    [key]: evt.target.value
                }
            }
        ));
    };

    const handleSaveChanges = (rowId: string) => {
        dispatch(saveDeveloperData());

        const foundIndex = developersData.findIndex((el)=> el.id === rowId);
        console.log(developersData[foundIndex]);
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
            </div>
            <DashboardDataTable
                columns={columns}
                data={developersData}
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

export default DevelopersLayout;

