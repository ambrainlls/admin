import React, { ChangeEvent, useState } from 'react';
import DashboardPagination from '../../main/dashboardPagination/DashboardPagination';
import styles from './homePageLayout.module.css';

function HomePageLayout() {
    const [pageCount, setPageCount] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (evt: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.homePageContainer}>
             Home
             <DashboardPagination
                  currentPage={currentPage}
                  pageCount={pageCount}
                  handlePageChange={handlePageChange}
             />
        </div>
    )
}

export default HomePageLayout;

