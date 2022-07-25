import React from 'react';
import ResumeLayout from '../../components/layouts/resumeLayout/ResumeLayout';
import styles from './resume.module.css';

function Resume(){
    return (
        <div className={styles.projectsContainer}>
           <ResumeLayout />
        </div>
    )
}

export default Resume;

