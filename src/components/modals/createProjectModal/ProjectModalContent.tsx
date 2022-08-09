import React, {ChangeEvent, useEffect} from 'react';
import { CreateProjectTypes, ProjectTypes } from '../../../redux/types';
import MultiSelect from '../../ui/multiSelect/MultiSelect';
import styles from './ProjectModalComponent.module.css';
import project from "../../../pages/Project/Project";

interface EmployeeModalContentProps {
    handleClose: () => void;
    handleSave: () => void;
    employeesOptions: any[];
    projectData?: ProjectTypes | CreateProjectTypes;
    handleChangeProjectData: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) => void
    handleSelectedOptions: (selectedOptionsIds: string[]) => void;
}

const ProjectModalContent = ({
    handleClose,
    handleSave,
    employeesOptions,
    projectData,
    handleChangeProjectData,
    handleSelectedOptions,
}: EmployeeModalContentProps) => {

    return (
        <>
            <div className={styles.modalComponentTitle}>
                <p>Project</p>
            </div>
            <div className={styles.fieldsToFill}>
                <div className={styles.modalField}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={(projectData && projectData.company_name) ? projectData.company_name : ''}
                        onChange={(evt) => {handleChangeProjectData(evt, 'company_name')}}
                        placeholder="Name"
                    />
                </div>
                <div className={styles.modalFieldMultiSelect}>
                    <MultiSelect
                        options={employeesOptions}
                        handleSelectedOptions={handleSelectedOptions}
                        selectedOptions={(projectData && projectData.employee) ? projectData.employee : []}
                        optionKey={'name'}
                    />
                </div>
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn}
                        onClick={handleClose}
                >
                    Close
                </button>
                <button className={styles.saveBtn}
                        onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default ProjectModalContent
