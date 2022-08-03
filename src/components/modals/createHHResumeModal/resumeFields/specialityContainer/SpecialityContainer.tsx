import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { setSpeciality } from '../../../../../redux/slice/hhResumeSlice';
import styles from './specialityContainer.module.css';

function SpecialityContainer() {
    const dispatch = useDispatch();

    const careerObjective = useSelector(
        (state: RootState) => state.hhResumeReducer.speciality ? state.hhResumeReducer.speciality.career_objective : ''
    );

    return (
        <div className={styles.specialityContainer}>
            <div className={styles.specialityDetailsItem}>
                <label htmlFor="">Career objective</label>
                <input
                    id="career_objective"
                    type="text"
                    value={careerObjective}
                    onChange={(evt) => {dispatch(setSpeciality({career_objective: evt.target.value}))}}
                />
            </div>
        </div>
    )
}

export default SpecialityContainer;
