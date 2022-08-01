import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
  deleteContact,
  saveContactData,
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

function ContactUsLayout() {
    const dispatch = useDispatch();
    const contactData = useSelector((state: RootState) => state.contactUsReducer.contactData);
    const contactUsData = useSelector((state: RootState) => state.contactUsReducer.contactUsData);
    const selectedContactId = useSelector((state: RootState) => state.contactUsReducer.selectedContactId);

    const columns = [
        {
            name: 'Name',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.name}
                                    onChange={(evt) => {handleChangeContactData(evt, 'name', row.id)}}
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
            name: 'Lastname',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.lastname}
                                    onChange={(evt) => {handleChangeContactData(evt, 'lastname', row.id)}}
                                />
                            ) : (
                                <div>{row.lastname}</div>
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
            name: 'Message',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>
                        {
                            selectedContactId === row.id ? (
                                <input
                                    type="text"
                                    className={`${styles.tableCell} ${row.id !== selectedContactId ? styles.disabledInput : ''}`}
                                    disabled={row.id !== selectedContactId}
                                    value={row.message}
                                    onChange={(evt) => {handleChangeContactData(evt, 'message', row.id)}}
                                />
                            ) : (
                                <div>{row.message}</div>
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
                            onClick={() => handleDeleteContact(row.id)}
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
        ContactUsApi.getAllContacts()
        .then(res => {
            const data = res.data ? res.data : [];
            dispatch(setContactsData(data));
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
        // dispatch(saveContactData());

        const foundIndex = contactUsData.findIndex((el)=> el.id === rowId);
        ContactUsApi.updateContact(contactUsData[foundIndex])
        .then(res => {
            console.log(res) // fixme m
        })
        console.log(contactUsData[foundIndex]);
    };

    const handleCreate = () => {
        ContactUsApi.createContact(contactData)
        .then(res => {
            console.log(res) // fixme m
        })
        console.log('contactUs', contactData);
    };

    const handleDeleteContact = (rowId: string) => {
        ContactUsApi.deleteContact(rowId)
        .then(res => {
            console.log(res) // fixme m
        })
        // dispatch(deleteContact(rowId));
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
                        handleSave={handleCreate}
                    />
                )
            }
        </div>
    )
}

export default ContactUsLayout;

