import React from 'react';
import DevelopersLayout from '../../components/layouts/developersLayout/DevelopersLayout';
import styles from './developers.module.css';

function Developers() {
    return (
        <div className={styles.developersContainer}>
            <DevelopersLayout />
        </div>
    )
}

export default Developers;

