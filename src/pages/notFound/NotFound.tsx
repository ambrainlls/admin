import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not-found.png';
import styles from './notFound.module.css';

function NotFound(){
    return(
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundImage}>
                <img src={notFound} alt="" />
            </div>
            <div className={styles.notFoundMessage}>
                <h2>SORRY, THE PAGE YOU REQUESTED DOESN'T EXIST</h2>
                <Link className={styles.notFoundBtn} to="/">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;

