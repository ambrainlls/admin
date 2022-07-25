import React from 'react';
import ProjectsLayout from '../../components/layouts/projectsLayout/ProjectsLayout';
import styles from './projects.module.css';

function Projects(){
    return(
        <div className={styles.projectsContainer}>
           <ProjectsLayout />
        </div>
    )
}

export default Projects;

