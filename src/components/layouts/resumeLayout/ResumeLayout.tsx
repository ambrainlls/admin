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
import {hhResumeNativeLanguage, ResumeTypes} from '../../../redux/types';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import CreateHHResumeModalComponent from '../../modals/createHHResumeModal/CreateHHResumeModalComponent';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import hhLogo from '../../../assets/images/logos/HeadHunter_logo.png';
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
    const hhResumeCV = useSelector((state: RootState) => state.hhResumeReducer.cv);
    const hhResumeEducation = useSelector((state: RootState) => state.hhResumeReducer.education);
    const hhResumeExperience = useSelector((state: RootState) => state.hhResumeReducer.experience);
    const hhResumeSpeciality = useSelector((state: RootState) => state.hhResumeReducer.speciality);
    const hhResumeNativeLanguage: hhResumeNativeLanguage = useSelector((state: RootState) => state.hhResumeReducer.nativeLanguage);
    const hhResumeForeignLanguages = useSelector((state: RootState) => state.hhResumeReducer.foreignLanguages);

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
    const [showHHModal, setShowHHModal] = useState(false);

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

    const handleCreateHHResume = () => {
        const languages: any = {};

        for(let key in hhResumeNativeLanguage){
            // @ts-ignore
            const value = hhResumeNativeLanguage[key];
            languages[value] = key;
        }

        hhResumeForeignLanguages.forEach((item: any) => {
                Object.assign(languages, {
                    [item.language_type]: item.level
                })
        });

        const params = {
            cv: hhResumeCV,
            education: hhResumeEducation,
            experience: hhResumeExperience,
            language: languages,
            speciality: hhResumeSpeciality,
        };

        console.log(params) // fixme m
    };

    return (
        <div className={styles.resumeContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
            </div>
            <div className={styles.websiteIconsForResume}
                 onClick={() => setShowHHModal(!showHHModal)}
            >
                <div className={styles.hhIcon}>
                    <span>Create Resume in HH</span>
                    <img src={hhLogo}
                    />
                </div>
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
            {
                showHHModal && (
                    <CreateHHResumeModalComponent
                        handleClose={() => setShowHHModal(false)}
                        handleSave={handleCreateHHResume}
                    />
                )
            }
        </div>
    )
}

export default ResumeLayout;

