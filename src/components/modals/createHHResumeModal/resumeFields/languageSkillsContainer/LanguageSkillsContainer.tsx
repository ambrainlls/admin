import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import {
    setNativeLanguage,
    updateForeignLanguage,
    addForeignLanguage,
    deleteForeignLanguage,
} from '../../../../../redux/slice/hhResumeSlice';
import deleteIcon from '../../../../../assets/images/actionIcons/delete.svg';
import styles from './languageSkillsContainer.module.css';

function LanguageSkillsContainer() {
    const dispatch = useDispatch();

    const foreignLanguages = useSelector((state: RootState) => ( state.hhResumeReducer.foreignLanguages));
    const nativeLanguage = useSelector((state: RootState) => (
        state.hhResumeReducer.nativeLanguage && state.hhResumeReducer.nativeLanguage.native_language
            ? state.hhResumeReducer.nativeLanguage.native_language
            : ''
        )
    );

    return (
        <div className={styles.languageSkillsContainer}>
            <div className={styles.languageSkillsDetailsItem}>
                <label>Native language</label>
                <input
                    id="native_language"
                    type="text"
                    value={nativeLanguage}
                    onChange={(evt) => {dispatch(setNativeLanguage({native_language: evt.target.value}))}}
                />
            </div>
            <div className={styles.foreignLanguagesContainer}>
                <label>Foreign languages</label>
                {
                    foreignLanguages.map((item, index) => (
                        <div className={styles.foreignLanguages} key={index}>
                            <input
                                id="foreign_languages"
                                type="text"
                                value={foreignLanguages[index].language_type}
                                onChange={(evt) => {
                                    dispatch(
                                        updateForeignLanguage(
                                            {
                                                value: evt.target.value,
                                                languageId: item.id,
                                                key: 'language_type'
                                            }
                                        )
                                    )
                                }}
                            />
                            <select
                                onChange={(evt) => {
                                    dispatch(
                                        updateForeignLanguage(
                                            {
                                                value: evt.target.value,
                                                languageId: item.id,
                                                key: 'level'
                                            }
                                        )
                                    )
                                }}
                                value={foreignLanguages[index].level}
                            >
                                <option value={'a1'}>A1 - Initial</option>
                                <option value={'a2'}>A2 - Elementary</option>
                                <option value={'b1'}>B1 - Medium</option>
                                <option value={'b2'}>B2 - Intermediate Advanced</option>
                                <option value={'c1'}>C1 - Advanced</option>
                                <option value={'c2'}>C2 - In perfection</option>
                            </select>
                            <div className={styles.deleteIconContainer}
                                 onClick={() => {dispatch(deleteForeignLanguage(item.id))}}
                            >
                                <img src={deleteIcon} alt={deleteIcon} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <span
                className={`${styles.addLanguage} ${foreignLanguages.length === 2 ? styles.disabledAddLanguage : ''}`}
                onClick={() => dispatch(addForeignLanguage())}
            >
                Specify another language
            </span>
        </div>
    )
}

export default LanguageSkillsContainer;
