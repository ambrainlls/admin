import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import styles from './dashboardDataTable.module.css';

interface DashboardDataTableProps {
    columns: TableColumn<any>[];
    data: any[];
}

function DashboardDataTable ({columns, data}: DashboardDataTableProps) {

    return (
        <div className={styles.dataTableContainer}>
            <DataTable
                className={styles.dashboardDataTableWrapper}
                columns={columns}
                data={data}
                defaultSortFieldId={'name'}
                striped
            />
        </div>
    )
}
export default DashboardDataTable;