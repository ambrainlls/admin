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
    updateCreatedEmployeeProjects,
} from '../../../redux/slice/employeesSlice';
import { EmployeesDataTypes, ProjectTypes } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import EmployeeModalComponent from '../../modals/employeeModal/EmployeeModalComponent';
import { EmployeesApi } from '../../../api/EmployeesApi';
import { ProjectsApi } from '../../../api/ProjectsApi';
import { validateEmail } from '../../../helpers/helpers';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import styles from './employeesLayout.module.css';

function EmployeesLayout() {
    const dispatch = useDispatch();
    const employeesData = useSelector((state: RootState) => state.employeesReducer.employeesData);
    const createEmployeeData = useSelector((state: RootState) => state.employeesReducer.createEmployeeData);
    const selectedEmployeeId = useSelector((state: RootState) => state.employeesReducer.selectedEmployeeId);

    const requiredMessage = 'The field is required !';

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
                    <div className={styles.responsiveWidt}>{row.description}</div>
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
                    <div>{row.birthday}</div>
                )
            }
        },
        {
            name: 'Start date',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div>{row.start_date}</div>
                )
            }
        },
        {
            name: 'Projects',
            cell: (row: EmployeesDataTypes) => {
                return (
                    <div className={styles.responsiveWidt}>
                        {
                            row.projects.map(item => (
                                <div key={item.id} >{item.company_name},</div>
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

    const [nameValidationMessage, setNameValidationMessage] = useState('');
    const [imageValidationMessage, setImageValidationMessage] = useState('');
    const [surnameValidationMessage, setSurnameValidationMessage] = useState('');
    const [birthdayValidationMessage, setBirthdayValidationMessage] = useState('');
    const [startDateValidationMessage, setStartDateValidationMessage] = useState('');
    const [emailValidationMessage, setEmailValidationMessage] = useState('');
    const [phoneValidationMessage, setPhoneValidationMessage] = useState('');
    const [telegramChatIdValidationMessage, setTelegramChatIdValidationMessage] = useState('');
    const [allProjects, setAllProjects] = useState<ProjectTypes[]>([]);
    const [pageCount, setPageCount] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
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
            project:[],
            telegram_chat_id: '',
        }
    );

    useEffect(() => {
        getEmployees();

        ProjectsApi.getAllProjects()
        .then(res => {
            const data = res.data;

            setAllProjects(data);
        })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    },[]);

    useEffect(() => {
        setNameValidationMessage('');
        setSurnameValidationMessage('');
        setBirthdayValidationMessage('');
        setEmailValidationMessage('');
        setPhoneValidationMessage('');
        setTelegramChatIdValidationMessage('');
    }, [showModal, selectedEmployeeId]);

    const getEmployees = (value?: string) => {
        EmployeesApi.getAllEmployees(value)
        .then(res => {
            const { data } = res.data;
            const { current_page, last_page } = res.data.meta;
            setCurrentPage(current_page);
            setPageCount(last_page);
            dispatch(setEmployeesData(data));
        })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    };

    const handleSearchEmployee = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setSearchValue(value);
        setCurrentPage(1);
        getEmployees(`?q=${value}`);
    };

    const handleValidationErrors = (employeeData: EmployeesDataTypes) => {
        if (!employeeData.image) {
            setImageValidationMessage('You have not selected an image');

            return;
        } else {
            setImageValidationMessage('');
        }

        if (!employeeData.name) {
            setNameValidationMessage(requiredMessage);

            return;
        } else {
            setNameValidationMessage('');
        }

        if (!employeeData.surname) {
            setSurnameValidationMessage(requiredMessage);

            return;
        } else {
            setSurnameValidationMessage('');
        }

        if (!employeeData.birthday) {
            setBirthdayValidationMessage(requiredMessage);

            return;
        } else {
            setBirthdayValidationMessage('');
        }

        if (!employeeData.start_date) {
            setStartDateValidationMessage(requiredMessage);

            return;
        } else {
            setStartDateValidationMessage('');
        }

        if (!employeeData.email) {
            setEmailValidationMessage(requiredMessage);
            return;
        } else {
            setEmailValidationMessage('');
        }

        if (!validateEmail(employeeData.email)) {
            setEmailValidationMessage('The mail is invalid !');

            return;
        } else {
            setEmailValidationMessage('');
        }

        if (!employeeData.phone) {
            setPhoneValidationMessage(requiredMessage);

            return;
        } else {
            setPhoneValidationMessage('');
        }

        if (!employeeData.telegram_chat_id) {
            setTelegramChatIdValidationMessage(requiredMessage);

            return;
        } else {
            setTelegramChatIdValidationMessage('');
        }

        if (!(/^\d+$/.test(employeeData.telegram_chat_id))) {
            setTelegramChatIdValidationMessage('Telegram chat id must be a number !');

            return;
        } else {
            setTelegramChatIdValidationMessage('');
        }

        if (employeeData.telegram_chat_id.toString().length !== 9) {
            setTelegramChatIdValidationMessage('The length of telegram chat id must be 9 !');

            return;
        } else {
            setTelegramChatIdValidationMessage('');
        }

        return true;
    };

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedEmployeeId(rowId));

        const foundIndex = employeesData.findIndex((el) => el.id === rowId);

        setEditableEmployee(employeesData[foundIndex]);
    };

    const handleSaveChanges = () => {
        const hasError = !handleValidationErrors(editableEmployee);

        if (hasError) {
            return
        }

        const updatedData = {
            ...editableEmployee,
            project_ids: editableEmployee.projects.map((el: any) => el.id),
        };

        EmployeesApi.updateEmployee(updatedData)
        .then(res => {
            const updatedParam = res.data;
            dispatch(saveUpdatedEmployeeData(updatedParam));
        })
        .catch(err => {
            if (err) {
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
            if (err) {
                throw err;
            }
        });
    };

    const handleCreateEmployee = () => {
        const hasError = !handleValidationErrors(createEmployeeData);

        if (hasError) {
            return
        }

        const createdData = {
            ...createEmployeeData,
            project_ids: createEmployeeData.projects.map((el: any) => el.id),
        };

        EmployeesApi.createEmployee(createdData)
        .then(res => {
            const newEmployee = res.data;
            dispatch(addNewEmployee(newEmployee));
            setShowModal(false);
        })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    };

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);

        getEmployees(`?q=${searchValue}&page=${page}`);
    };

    const handleChangeCreateEmployeData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => {
        dispatch(createEmployee({[key]: evt.target.value}));
    };

    const handleSelectedOptionsForCreateEmployee = (selectedOption: any) => {
        dispatch(updateCreatedEmployeeProjects(selectedOption));
    };

    const handleChangeUpdateEmployeData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, key: string) => {
        const updatedEmployee = {
            ...editableEmployee,
            [key]: evt.target.value
        };

        setEditableEmployee(updatedEmployee);
    };

    const handleSelectedOptionsForUpdateEmployee = (selectedOption: any) => {
        const updatedEmployee = {...editableEmployee};
        const foundIndex = updatedEmployee.projects.findIndex((el: any)=> el.id === selectedOption.id);

        const newProjects = [...updatedEmployee.projects];
        if(foundIndex !== -1) {
            newProjects.splice(foundIndex, 1);
        } else {
            newProjects.push(selectedOption);
        }

        updatedEmployee.projects = newProjects;
        setEditableEmployee(updatedEmployee);
    };

    const handleCloseCreateEmployeModal = () => {
        setShowModal(false);
        dispatch(resetEmployeDataInModal());
    };

    const handleCloseUpdateEmployeModal = () => {
        dispatch(setSelectedEmployeeId(''));
    };

    const handleCreateEmployeeImage = async (img: string, key: string) => {
        dispatch(createEmployee({[key]: img}));
    };

    const handleUpdateEmployeeImage = async (img: string, key: string) => {
        const updatedEmployee = {
            ...editableEmployee,
            [key]: img,
        };

        setEditableEmployee(updatedEmployee);
    };

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={handleSearchEmployee}
                />
                <div className={styles.createEmployeeWrapper}
                     onClick={() => {setShowModal(!showModal)}}
                >
                    <span>Create</span>
                    <img src={createRowIcon} alt={'createRowIcon'} />
                </div>
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
                        handleChangeEmployeeImage={handleCreateEmployeeImage}
                        handleChangeEmployeData={handleChangeCreateEmployeData}
                        handleSelectedOptions={handleSelectedOptionsForCreateEmployee}
                        imageValidationMessage={imageValidationMessage}
                        nameValidationMessage={nameValidationMessage}
                        surnameValidationMessage={surnameValidationMessage}
                        birthdayValidationMessage={birthdayValidationMessage}
                        startDateValidationMessage={startDateValidationMessage}
                        emailValidationMessage={emailValidationMessage}
                        phoneValidationMessage={phoneValidationMessage}
                        telegramChatIdValidationMessage={telegramChatIdValidationMessage}
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
                        handleChangeEmployeeImage={handleUpdateEmployeeImage}
                        handleChangeEmployeData={handleChangeUpdateEmployeData}
                        handleSelectedOptions={handleSelectedOptionsForUpdateEmployee}
                        imageValidationMessage={imageValidationMessage}
                        nameValidationMessage={nameValidationMessage}
                        surnameValidationMessage={surnameValidationMessage}
                        birthdayValidationMessage={birthdayValidationMessage}
                        startDateValidationMessage={startDateValidationMessage}
                        emailValidationMessage={emailValidationMessage}
                        phoneValidationMessage={phoneValidationMessage}
                        telegramChatIdValidationMessage={telegramChatIdValidationMessage}
                    />
                )
            }
        </div>
    )
}

export default EmployeesLayout;

