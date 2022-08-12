import {EmployeesDataTypes, ProjectTypes} from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './projectLayout.module.css'
import {
    createProject,
    deleteProject,
    resetProjectDataInModal,
    saveUpdatedProjectData,
    setProjectsData,
    setSelectedProjectId,
} from "../../../redux/slice/projectSlice";
import FilterComponent from "../../ui/filterComponent/FilterComponent";
import { ProjectsApi } from '../../../api/ProjectsApi';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import DashboardDataTable from "../../main/dashboardDataTable/DashboardDataTable";
import DashboardPagination from "../../main/dashboardPagination/DashboardPagination";
import ProjectModalComponent from "../../modals/createProjectModal/ProjectModalComponent";

import {EmployeesApi} from "../../../api/EmployeesApi";


function ProjectLayout() {
    const dispatch = useDispatch();
    const projectsData = useSelector((state: RootState) => state.projectReducer.projectsData);
    const createProjectData = useSelector((state: RootState) => state.projectReducer.createProjectData);
    const selectedProjectId = useSelector((state: RootState) => state.projectReducer.selectedProjectId);

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [allEmployees, setAllEmployees] = useState([]);
    const [editableProject, setEditableProject] = useState<any>(
        {
            id: '',
            name: '',
            employees: [],
            employees_ids: []
        }
    );

    const columns = [
        {
            name: 'Name',
            cell: (row: ProjectTypes) => {
                return (
                    <div>{row.company_name}</div>
                )
            }
        },
        {
            name: 'Employees',
            cell: (row: ProjectTypes) => {
                return (
                    <div className={styles.employeesContainer}>
                        {
                            row.employees.length ? (
                                row.employees.map((employee: any, idx: number) => (
                                    <div key={idx}>{employee}</div>
                                ))
                            ) :
                                'There is no employees for this project'

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

        EmployeesApi.getAllEmployees()
            .then(res => {
                const data = res.data;
                setAllEmployees(data);
            })
            .catch(err => {
                if (err){
                    throw err;
                }
            });
    }, []);

    const handleDeleteProject = (projectId: string) => {
      ProjectsApi.deleteProject(projectId)
          .then(res => {
              dispatch(deleteProject(projectId));
          })
          .catch(err => {
              if (err) {
                  throw err;
              }
          })
    };

    const handleRowEdit = (rowId: string) => {
        dispatch(setSelectedProjectId(rowId));

        const foundIndex = projectsData.findIndex((el) => el.id === rowId);

        setEditableProject(projectsData[foundIndex])
    };

    const handleSaveChanges = () => {
        ProjectsApi.updateProject(editableProject)
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
        ProjectsApi.createProject(createProjectData)
            .then(res => {
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

    const handleChangeCreateProjectData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {
        dispatch(createProject({[key]: evt.target.value}));
    };

    const handleSelectedOptionsForCreateProject = (selectedOptionsIds: string[]) => {
        dispatch(createProject({employees_ids: selectedOptionsIds}));
    };

    const handleChangeUpdateProjectData = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => {
        const updatedProject = {
            ...editableProject,
            [key]: evt.target.value
        };
        setEditableProject(updatedProject);
    };

    const handleSelectedOptionsForUpdateProject = (selectedOptionsIds: string[]) => {
        const updatedProject = {
            ...editableProject,
            employees_ids: selectedOptionsIds
        };

        setEditableProject(updatedProject);
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
                <FilterComponent />
                <img src={createRowIcon} alt={'createRowIcon'}
                     className={styles.createRowIcon}
                     onClick={() => setShowModal(!showModal)}
                />
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
                        handleSelectedOptions={handleSelectedOptionsForCreateProject}
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
                        handleChangeProjectData={handleChangeUpdateProjectData}
                        handleSelectedOptions={handleSelectedOptionsForUpdateProject}
                    />
                )
            }
        </div>
    )
}

export default ProjectLayout;