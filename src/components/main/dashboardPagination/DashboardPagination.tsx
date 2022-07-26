import React, { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import styles from './dashboardPagination.module.css';

interface DashboardPaginationProps {
    currentPage: number;
    pageCount: number;
    handlePageChange: (evt: ChangeEvent<unknown>, page: number) => void;
}

const useStyles = makeStyles(() => ({
    ul: {
        '& .MuiPaginationItem-root': {
            fontWeight: 'bold',

            '&.Mui-selected': {
                background: '#D0E0FF',
                color: 'white',
            },
        },
    },
}));

function DashboardPagination({ currentPage, pageCount, handlePageChange }: DashboardPaginationProps) {
    const classes = useStyles();

    return (
        <div className={styles.paginationContainer}>
            <Pagination
                page={currentPage}
                count={pageCount}
                shape="rounded"
                classes={{root: classes.ul}}
                onChange={handlePageChange}
                hideNextButton={pageCount < 5}
                hidePrevButton={pageCount < 5}
            />
        </div>
    )
}

export default DashboardPagination;
