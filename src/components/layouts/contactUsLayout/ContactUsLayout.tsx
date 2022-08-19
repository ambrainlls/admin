import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import {
    setContactsData,
} from '../../../redux/slice/contactUsSlice';
import { ContactUsTypes } from '../../../redux/types';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import { ContactUsApi } from '../../../api/ContactUsApi';
import styles from './contactUsLayout.module.css';

function ContactUsLayout() {
    const dispatch = useDispatch();
    const contactUsData = useSelector((state: RootState) => state.contactUsReducer.contactUsData);

    const columns = [
        {
            name: 'Name',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>{row.name}</div>
                )
            }
        },
        {
            name: 'Lastname',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>{row.lastname}</div>
                )
            }
        },
        {
            name: 'Email',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>{row.email}</div>
                )
            }
        },
        {
            name: 'Message',
            cell: (row: ContactUsTypes) => {
                return (
                    <div>{row.message}</div>
                )
            }
        },
    ];

    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

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

    return (
        <div className={styles.contactUsContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent />
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
        </div>
    )
}

export default ContactUsLayout;

