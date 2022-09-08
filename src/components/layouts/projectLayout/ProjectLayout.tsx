import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { EmployeesDataTypes, ProjectTypes } from '../../../redux/types';
import { ProjectsApi } from '../../../api/ProjectsApi';
import { EmployeesApi } from '../../../api/EmployeesApi';
import {
    addProject,
    createProject,
    deleteProject,
    resetProjectDataInModal,
    saveUpdatedProjectData,
    setProjectsData,
    setSelectedProjectId,
    updateCreatedProjectEmployees,
} from '../../../redux/slice/projectSlice';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import ProjectModalComponent from '../../modals/createProjectModal/ProjectModalComponent';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import styles from './projectLayout.module.css'


function ProjectLayout() {
    const requiredMessage = 'The field is required !';

    const dispatch = useDispatch();
    const projectsData = useSelector((state: RootState) => state.projectReducer.projectsData);
    const createProjectData = useSelector((state: RootState) => state.projectReducer.createProjectData);
    const selectedProjectId = useSelector((state: RootState) => state.projectReducer.selectedProjectId);

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [allEmployees, setAllEmployees] = useState<EmployeesDataTypes[]>([]);
    const [companyNameValidationMessage, setCompanyNameValidationMessage] = useState('');
    const [nameValidationMessage, setNameValidationMessage] = useState('');
    const [imageValidationMessage, setImageValidationMessage] = useState('');
    const [baseImageValidationMessage, setBaseImageValidationMessage] = useState('');
    const [logoValidationMessage, setLogoValidationMessage] = useState('');

    const [editableProject, setEditableProject] = useState<any>(
        {
            id: '',
            name: '',
            employees: [],
        }
    );

    const columns = [
        {
            name: 'Company name',
            cell: (row: ProjectTypes) => {
                return (
                    <div>{row.company_name}</div>
                )
            }
        },
        {
            name: 'Name',
            cell: (row: ProjectTypes) => {
                return (
                    <div>{row.name}</div>
                )
            }
        },
        {
            name: 'Employees',
            cell: (row: ProjectTypes) => {
                return (
                    <div className={styles.employeesContainer}>
                        {
                            (row.employees && row.employees.length) ? (
                                row.employees.map(({name, surname, id} : number | any) => (
                                    <div key={id}>{`${name} ${surname}`}</div>
                                ))
                            ) : 'There is no employees for this project'
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
                            className={`${styles.deleteRowIcon} ${row.id === selectedProjectId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => handleDeleteProject(row.id)}
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

    useEffect(() => {
        getAllProjects();
        EmployeesApi.getAllEmployees()
        .then(res => {
            const { data } = res.data;
            setAllEmployees(data);
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    }, []);

    const handleValidationErrors = (projectData: ProjectTypes) => {
        if (!projectData.company_name) {
            setCompanyNameValidationMessage(requiredMessage);

            return;
        } else {
            setCompanyNameValidationMessage('');
        }

        if (!projectData.name) {
            setNameValidationMessage(requiredMessage);

            return;
        } else {
            setNameValidationMessage('');
        }

        if (!projectData.image) {
            setImageValidationMessage('You have not selected an image');

            return;
        } else {
            setImageValidationMessage('');
        }

        if (!projectData.baseImage) {
            setBaseImageValidationMessage('You have not selected an image');

            return;
        } else {
            setBaseImageValidationMessage('');
        }

        if (!projectData.logo) {
            setLogoValidationMessage('You have not selected an image');

            return;
        } else {
            setLogoValidationMessage('');
        }

        return true;
    };

    const getAllProjects = () => {
        ProjectsApi.getAllProjects()
        .then(res => {
            const data = res.data;
            dispatch(setProjectsData(data));
        })
        .catch(err => {
            if (err){
                throw err;
            }
        });
    };

    const handleDeleteProject = (projectId: string) => {
        ProjectsApi.deleteProject(projectId)
        .then(res => {
             dispatch(deleteProject(projectId));
         })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    };

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedProjectId(rowId));

        const foundIndex = projectsData.findIndex((el) => el.id === rowId);

        setEditableProject(projectsData[foundIndex])
    };

    const handleSaveChanges = () => {
        const hasError = !handleValidationErrors(editableProject);

        if (hasError) {
            return;
        }

        const updatedData = {
            ...editableProject,
            employee_ids: editableProject.employees.map((el: any) => el.id),
        };

        ProjectsApi.updateProject(updatedData)
        .then(res => {
            const updatedParam = res.data;
            dispatch(saveUpdatedProjectData(updatedParam));
        })
        .catch(err => {
            if (err) {
                throw err;
            }
        });
    };

    const handleCreateProject = () => {
        const hasError = !handleValidationErrors(createProjectData);

        if (hasError) {
            return;
        }

        const createdData = {
            ...createProjectData,
            employee_ids: createProjectData.employees.map((el: any) => el.id),
        };

        ProjectsApi.createProject(createdData)
        .then(res => {
            const { data } = res;
            dispatch(addProject(data));
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
    };

    const handleChangeCreateProjectData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => {
        dispatch(createProject({[key]: evt.target.value}));
    };

    const handleSelectedOptionsForCreateProject = (selectedOption: any) => {
        dispatch(updateCreatedProjectEmployees(selectedOption));
    };

    const handleChangeUpdateProjectData = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, key: string) => {
        const updatedProject = {
            ...editableProject,
            [key]: evt.target.value
        };
        setEditableProject(updatedProject);
    };

    const handleCreateProjectImage = async (img: string, key: string) => {
        dispatch(createProject({[key]: img}));
    };

    const handleChangeProjectImage = async (img: string, key: string) => {
        const updatedProject = {
            ...editableProject,
            [key]: img,
        };

        setEditableProject(updatedProject);
    };

    const handleSelectedOptionsForUpdateProject = (selectedOption: any) => {
        const updatedProjects = {...editableProject};
        const foundIndex = updatedProjects.employees.findIndex((el: any)=> el.id === selectedOption.id);

        const newEmployees = [...updatedProjects.employees];
        if(foundIndex !== -1) {
            newEmployees.splice(foundIndex, 1);
        } else {
            newEmployees.push(selectedOption);
        }

        updatedProjects.employees = newEmployees;
        setEditableProject(updatedProjects);
    };

    const handleCloseCreateProjectModal = () => {
        setShowModal(false);
        dispatch(resetProjectDataInModal());
    };

    const handleCloseUpdateProjectModal = () => {
        dispatch(setSelectedProjectId(''));
    };

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
                <div className={styles.createProjectWrapper}
                     onClick={() => {setShowModal(!showModal)}}
                >
                    <span>Create</span>
                    <img src={createRowIcon} alt={'createRowIcon'}
                         className={styles.createRowIcon}
                    />
                </div>
            </div>
            <DashboardDataTable
                columns={columns}
                data={projectsData}
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
                    <ProjectModalComponent
                        handleClose={handleCloseCreateProjectModal}
                        handleSave={handleCreateProject}
                        employeesOptions={allEmployees}
                        projectData={createProjectData}
                        handleChangeProjectData={handleChangeCreateProjectData}
                        handleChangeProjectImage={handleCreateProjectImage}
                        handleSelectedOptions={handleSelectedOptionsForCreateProject}
                        companyNameValidationMessage={companyNameValidationMessage}
                        nameValidationMessage={nameValidationMessage}
                        imageValidationMessage={imageValidationMessage}
                        baseImageValidationMessage={baseImageValidationMessage}
                        logoValidationMessage={logoValidationMessage}
                    />
                )
            }
            {
                selectedProjectId && (
                    <ProjectModalComponent
                        handleClose={handleCloseUpdateProjectModal}
                        handleSave={handleSaveChanges}
                        employeesOptions={allEmployees}
                        projectData={editableProject}
                        handleChangeProjectImage={handleChangeProjectImage}
                        handleChangeProjectData={handleChangeUpdateProjectData}
                        handleSelectedOptions={handleSelectedOptionsForUpdateProject}
                        companyNameValidationMessage={companyNameValidationMessage}
                        nameValidationMessage={nameValidationMessage}
                        imageValidationMessage={imageValidationMessage}
                        baseImageValidationMessage={baseImageValidationMessage}
                        logoValidationMessage={logoValidationMessage}
                    />
                )
            }
        </div>
    )
}

export default ProjectLayout;
