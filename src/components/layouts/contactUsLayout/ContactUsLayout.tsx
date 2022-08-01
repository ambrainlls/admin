import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
  deleteContact, saveContactData,
  setContactsData,
  setSelectedContactId,
  updateContactData
} from '../../../redux/slice/contactUsSlice';
import { ContactUsTypes } from '../../../redux/types';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import CreateContactUsModalComponent from '../../modals/createContactUsModal/CreateContactUsModalComponent';
import { ContactUsApi } from '../../../api/ContactUsApi';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import saveIcon from '../../../assets/images/dashboardDataTable/saveIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import styles from './contactUsLayout.module.css';

const data: ContactUsTypes[] = [
    {
        id: '1',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
    {
        id: '2',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
    {
        id: '3',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
    {
        id: '10',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
    {
        id: '4',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
    {
        id: '5',
        subject: 'Open vacancy',
        email: 'Harutyunyan@mail.ru',
        description: 'aaaaa'
    },
];

function ContactUsLayout() {
    const dispatch = useDispatch();
    const contactUsData = useSelector((state: RootState) => state.contactUsReducer.contactUsData);
    const selectedContactId = useSelector((state: RootState) => state.contactUsReducer.selectedContactId);

    const columns = [
        {
            name: 'Subject',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.subject}
                                    onChange={(evt) => {handleChangeContactData(evt, 'subject', row.id)}}
                                />
                            ) : (
                                <div>{row.subject}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: 'Email',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.email}
                                    onChange={(evt) => {handleChangeContactData(evt, 'email', row.id)}}
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
            name: 'Description',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.description}
                                    onChange={(evt) => {handleChangeContactData(evt, 'description', row.id)}}
                                />
                            ) : (
                                <div>{row.description}</div>
                            )
                        }
                    </div>
                )
            }
        },
        {
            name: '',
            cell: (row: ContactUsTypes) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={`${styles.deleteRowIcon} ${row.id === selectedContactId ? styles.disabledDeleteIcon : ''}`}
                            onClick={() => dispatch(deleteContact(row.id))}
                        />
                        {
                            row.id === selectedContactId ? (
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
                                    onClick={() => dispatch(setSelectedContactId(row.id))}
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
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(setContactsData(data));
        ContactUsApi.getAllContacts()
        .then(res => {
            console.log(res)
        })
    },[]);

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleChangeContactData = (evt: ChangeEvent<HTMLInputElement>, key: string, id: string) => {
        dispatch(updateContactData(
            {
                id,
                updatedParams: {
                   [key]: evt.target.value
                }
            }
        ));
    };

    const handleSaveChanges = (rowId: string) => {
        dispatch(saveContactData());

        const foundIndex = contactUsData.findIndex((el)=> el.id === rowId);
        console.log(contactUsData[foundIndex]);
    };

    const handleSave = () => {
        console.log('contactUs');
    };

    return (
        <div className={styles.contactUsContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
                <img src={createRowIcon} alt={'createRowIcon'}
                     className={styles.createRowIcon}
                     onClick={() => setShowModal(!showModal)}
                />
            </div>
            <DashboardDataTable
                columns={columns}
                data={contactUsData}
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
                    <CreateContactUsModalComponent
                        handleClose={() => setShowModal(false)}
                        handleSave={handleSave}
                    />
                )
            }
        </div>
    )
}

export default ContactUsLayout;

