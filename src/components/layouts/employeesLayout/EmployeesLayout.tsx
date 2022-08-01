import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
    deleteEmployee,
    setEmployeesData,
    setSelectedEmployeeId,
    saveEmployeeData,
    updateEmployeeData,
} from '../../../redux/slice/employeesSlice';
import { setIsOpen } from '../../../redux/slice/createEmployeeModalSlice';
import { EmployeesDataTypes } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import CreateEmployeeModalComponent from '../../modals/createEmployeeModal/CreateEmployeeModalComponent';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import styles from './employeesLayout.module.css';

const data: EmployeesDataTypes[] = [
    {
        id: '1',
        name: 'Artur',
        surname: 'Harutyunyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '2',
        name: 'Mihran',
        surname: 'Minasyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '3',
        name: 'Armen',
        surname: 'Asatryan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '10',
        name: 'Tatev',
        surname: 'Grigoryan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '4',
        name: 'Hovhannes',
        surname: 'Aleksanyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '5',
        name: 'Karlen',
        surname: 'Levonyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '6',
        name: 'Vahe',
        surname: 'Amiraghyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '7',
        name: 'Narek',
        surname: 'Sargsyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '8',
        name: 'Sona',
        surname: 'Babaxanyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
    {
        id: '9',
        name: 'Artur',
        surname: 'Harutyunyan',
        startDate: '12/02/2022',
        role: 'developer',
        position: 'frontend',
        email: 'frontend@mail.ru',
        phone: '+374 95 95 95 95',
    },
];

function EmployeesLayout() {
    const dispatch = useDispatch();
    const employeesData = useSelector((state: RootState) => state.employeesReducer.employeesData);
    const selectedEmployeeId = useSelector((state: RootState) => state.employeesReducer.selectedEmployeeId);

    const columns = [
        {
            name: 'Name',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        {
                            selectedEmployeeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.name}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'name', row.id)}}
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
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        {
                            selectedEmployeeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.surname}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'surname', row.id)}}
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
            name: 'Start date',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        {
                            selectedEmployeeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.startDate}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'startDate', row.id)}}
                                />
                            ) : (
                                <div>{row.startDate}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Role',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        {
                            selectedEmployeeId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.role}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'role', row.id)}}
                                />
                            ) : (
                                <div>{row.role}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Position',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        { selectedEmployeeId === row.id ? (
                            <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.position}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'position', row.id)}}
                            />
                        ) : (
                            <div>{row.position}</div>
                        )
                    }
                    </div>
                )
            }
        },
        {
            name: 'Email',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        { selectedEmployeeId === row.id ? (
                            <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.email}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'email', row.id)}}
                            />
                        ) : (
                            <div>{row.email}</div>
                        )
                    }
                    </div>
                )
            }
        },
        {
            name: 'Phone',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>
                        { selectedEmployeeId === row.id ? (
                            <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedEmployeeId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedEmployeeId}
                                    value={row.phone}
                                    onChange={(evt) => {handleChangeEmployeeData(evt, 'phone', row.id)}}
                            />
                        ) : (
                            <div>{row.phone}</div>
                        )
                    }
                    </div>
                )
            }
        },
        {
            name: '',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedEmployeeId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => dispatch(deleteEmployee(row.id))}
                        />
                        {
                            row.id === selectedEmployeeId ? (
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
                                    onClick={() => dispatch(setSelectedEmployeeId(row.id))}
                                />
                            )
                        }
                    </div>
                )
            }
        }
    ];

    useEffect(() => {
        dispatch(setEmployeesData(data));
    },[]);

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const handleChangeEmployeeData = (evt: ChangeEvent<HTMLInputElement>, key: string, id: string) => {
        dispatch(updateEmployeeData(
            {
                id,
                updatedParams: {
                    [key]: evt.target.value
                }
            }
        ));
    };

    const handleSaveChanges = (rowId: string) => {
        dispatch(saveEmployeeData());

        const foundIndex = employeesData.findIndex((el)=> el.id === rowId);
        console.log(employeesData[foundIndex]);
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        setShowModal(true);
        dispatch(setIsOpen());
    };

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
                <img src={createRowIcon} alt={'createRowIcon'} className={styles.createRowIcon} onClick={toggleModal}/>
            </div>
            <DashboardDataTable
                columns={columns}
                data={employeesData}
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
                    <CreateEmployeeModalComponent
                        handleClose={() => setShowModal(false)}
                    />
                )
            }
        </div>
    )
}

export default EmployeesLayout;

