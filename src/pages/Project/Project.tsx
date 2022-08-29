import React from "react";
import styles from './project.module.css';
import ProjectLayout from "../../components/layouts/projectLayout/ProjectLayout";

function Project() {
    return (
        <div className={styles.projectContainer}>
            <ProjectLayout />
        </div>
    )
}

export default Project;