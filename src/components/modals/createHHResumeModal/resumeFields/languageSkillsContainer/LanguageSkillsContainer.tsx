import React, { useState, ChangeEvent } from 'react';
import { uniqueId } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { setLanguage } from '../../../../../redux/slice/hhResumeSlice';
import styles from './languageSkillsContainer.module.css';

function LanguageSkillsContainer() {
    const dispatch = useDispatch();

    const nativeLanguage = useSelector((state: RootState) => (
        state.hhResumeReducer.language && state.hhResumeReducer.language.native_language
            ? state.hhResumeReducer.language.native_language
            : ''
        )
    );

    const [addLanguage, setAddLanguage] = useState(false);
    const [foreignLanguages, setForeignLanguages] = useState<any[]>([]);

    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    const onAddLanguage = () => {
        setAddLanguage(true);

        const updatedForeignLanguages = [...foreignLanguages];

        updatedForeignLanguages.push({
            id: uniqueId(),
            language_type: '',
            level: ''
        })

        setForeignLanguages(updatedForeignLanguages);
    };

    return (
        <div className={styles.languageSkillsContainer}>
            <div className={styles.languageSkillsDetailsItem}>
                <label>Native language</label>
                <input
                    id="native_language"
                    type="text"
                    value={nativeLanguage}
                    onChange={(evt) => {dispatch(setLanguage({native_language: evt.target.value}))}}
                />
            </div>
            {
                addLanguage && (
                    <div className={styles.foreignLanguagesContainer}>
                        <label>Foreign languages</label>
                        {
                            foreignLanguages.map((item) => (
                                <div className={styles.foreignLanguages} key={item.id}>
                                    <input
                                        id="foreign_languages"
                                        type="text"
                                        value={''}
                                        onChange={(evt) => {handleChangeHHResumeData(evt, 'native_language')}}
                                    />
                                    <select>
                                        <option value={'a1'}>A1 - Initial</option>
                                        <option value={'a2'}>A2 - Elementary</option>
                                        <option value={'b1'}>B1 - Medium</option>
                                        <option value={'b2'}>B2 - Intermediate Advanced</option>
                                        <option value={'c1'}>C1 - Advanced</option>
                                        <option value={'c2'}>C2 - In perfection</option>
                                    </select>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <span
                className={`${styles.addLanguage} ${foreignLanguages.length === 2 ? styles.disabledAddLanguage : ''}`}
                onClick={onAddLanguage}
            >
                Specify another language
            </span>
        </div>
    )
}

export default LanguageSkillsContainer;
