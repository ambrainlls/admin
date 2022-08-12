import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
    deleteEmployee,
    setEmployeesData,
    setSelectedEmployeeId,
    saveUpdatedEmployeeData,
    createEmployee,
    resetEmployeDataInModal,
    addNewEmployee,
} from '../../../redux/slice/employeesSlice';
import { EmployeesDataTypes } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import EmployeeModalComponent from '../../modals/createEmployeeModal/EmployeeModalComponent';
import { EmployeesApi } from '../../../api/EmployeesApi';
import { ProjectsApi } from '../../../api/ProjectsApi';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import styles from './employeesLayout.module.css';

function EmployeesLayout() {
    const dispatch = useDispatch();
    const employeesData = useSelector((state: RootState) => state.employeesReducer.employeesData);
    const createEmployeeData = useSelector((state: RootState) => state.employeesReducer.createEmployeeData);
    const selectedEmployeeId = useSelector((state: RootState) => state.employeesReducer.selectedEmployeeId);

    const [allProjects, setAllProjects] = useState([]);
    const [editableEmployee, setEditableEmployee] = useState<any>(
        {
            id: '',
            name: '',
            surname: '',
            birthday: '',
            description: '',
            start_date: '',
            role: '',
            position: '',
            email: '',
            phone: '',
            projects:[],
            project_ids: [],
            telegram_chat_id: '',
        }
    );

    const columns = [
        {
            name: 'Name',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.name}</div>
                )
            }
        },
        {
            name: 'Surname',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.surname}</div>
                )
            }
        },
        {
            name: 'Description',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.description}</div>
                )
            }
        },
        {
            name: 'Role',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.role}</div>
                )
            }
        },
        {
            name: 'Position',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.position}</div>
                )
            }
        },
        {
            name: 'Email',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.email}</div>
                )
            }
        },
        {
            name: 'Phone',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.phone}</div>
                )
            }
        },
        {
            name: 'Telegram chat Id',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.telegram_chat_id}</div>
                )
            }
        },
        {
            name: 'Birthday',
            cell: (row: EmployeesDataTypes) => {
                return (
                    // <div>{new Date(row.birthday).toISOString().slice(0, 10)}</div>
                    <div>{row.birthday}</div>
                )
            }
        },
        {
            name: 'Start date',
            cell: (row: EmployeesDataTypes) => {
                return (
                    // <div>{new Date(row.start_date).toISOString().slice(0, 10)}</div>
                    <div>{row.start_date}</div>
                )
            }
        },
        {
            name: 'Projects',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div className={styles.projectsContainer}>
                        {
                            row.projects.map(item => (
                                <div key={item.id}>{item.company_name},</div>
                            ))
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
                            onClick={() => handleDeleteEmployee(row.id)}
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

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        EmployeesApi.getAllEmployees()
        .then(res => {
            const data = res.data;
            dispatch(setEmployeesData(data));
            dispatch(setEmployeesData(data));
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });

        ProjectsApi.getAllProjects()
        .then(res => {
            const data = res.data;

            setAllProjects(data);
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    },[]);

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedEmployeeId(rowId));

        const foundIndex = employeesData.findIndex((el) => el.id === rowId);

        setEditableEmployee(employeesData[foundIndex])
    };

    const handleSaveChanges = () => {
        EmployeesApi.updateEmployee(editableEmployee)
        .then(res => {
            const updatedParam = res.data;
            dispatch(saveUpdatedEmployeeData(updatedParam));
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    };

    const handleDeleteEmployee = (employeeId: string) => {
        EmployeesApi.deleteEmployee(employeeId)
        .then(res => {
            dispatch(deleteEmployee(employeeId));
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    };

    const handleCreateEmployee = () => {
        EmployeesApi.createEmployee(createEmployeeData)
        .then(res => {
            const newEmployee = res.data;
            dispatch(addNewEmployee(newEmployee));
            setShowModal(false);
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleChangeCreateEmployeData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {
        dispatch(createEmployee({[key]: evt.target.value}));
    };

    const handleSelectedOptionsForCreateEmployee = (selectedOptionsIds: string[]) => {
        dispatch(createEmployee({project_ids: selectedOptionsIds}));
    };

    const handleChangeUpdateEmployeData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {
        const updatedEmployee = {
            ...editableEmployee,
            [key]: evt.target.value
        };
        setEditableEmployee(updatedEmployee);
    };

    const handleSelectedOptionsForUpdateEmployee = (selectedOptionsIds: string[]) => {
        const updatedEmployee = {
            ...editableEmployee,
            project_ids: selectedOptionsIds
        };

        setEditableEmployee(updatedEmployee);
    };

    const handleCloseCreateEmployeModal = () => {
        setShowModal(false);
        dispatch(resetEmployeDataInModal());
    };

    const handleCloseUpdateEmployeModal = () => {
        dispatch(setSelectedEmployeeId(''));
    };

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
                <img src={createRowIcon} alt={'createRowIcon'}
                     className={styles.createRowIcon}
                     onClick={() => setShowModal(!showModal)}
                />
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
                    <EmployeeModalComponent
                        handleClose={handleCloseCreateEmployeModal}
                        handleSave={handleCreateEmployee}
                        projectOptions={allProjects}
                        employeeData={createEmployeeData}
                        handleChangeEmployeData={handleChangeCreateEmployeData}
                        handleSelectedOptions={handleSelectedOptionsForCreateEmployee}
                    />
                )
            }
            {
                selectedEmployeeId && (
                    <EmployeeModalComponent
                        handleClose={handleCloseUpdateEmployeModal}
                        handleSave={handleSaveChanges}
                        projectOptions={allProjects}
                        employeeData={editableEmployee}
                        handleChangeEmployeData={handleChangeUpdateEmployeData}
                        handleSelectedOptions={handleSelectedOptionsForUpdateEmployee}
                    />
                )
            }
        </div>
    )
}

export default EmployeesLayout;

