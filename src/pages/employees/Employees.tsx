import React from 'react';
import EmployeesLayout from '../../components/layouts/employeesLayout/EmployeesLayout';
import styles from './employees.module.css';

function Employees() {
    return (
        <div className={styles.employeesContainer}>
            <EmployeesLayout />
        </div>
    )
}

export default Employees;

