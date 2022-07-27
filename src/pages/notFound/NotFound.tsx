import React from 'react';
import NotFoundLayout from '../../components/layouts/notFoundLayout/NotFoundLayout';
import styles from './notFound.module.css';

function NotFound(){
    return (
        <div className={styles.notFoundContainer}>
            <NotFoundLayout />
        </div>
    )
}

export default NotFound;

