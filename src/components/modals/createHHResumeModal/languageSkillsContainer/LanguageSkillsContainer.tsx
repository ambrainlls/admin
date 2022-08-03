import React, { ChangeEvent } from 'react';
import styles from './languageSkillsContainer.module.css';

function LanguageSkillsContainer() {
    const handleChangeHHResumeData = (evt: ChangeEvent, key: string) => {

    };

    return (
        <div className={styles.languageSkillsContainer}>
            <div className={styles.languageSkillsDetailsItem}>
                <label>Native language</label>
                <input
                    id="native_language"
                    type="text"
                    value={''}
                    onChange={(evt) => {handleChangeHHResumeData(evt, 'native_language')}}
                />
            </div>
            <div className={styles.foreignLanguagesContainer}>
                <label>Foreign languages</label>
                <div className={styles.foreignLanguages}>
                    <input
                        id="foreign_languages"
                        type="text"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'native_language')}}
                    />
                    <select name="" id="">
                        <option value={'a1'}>A1 - Initial</option>
                        <option value={'a2'}>A2 - Elementary</option>
                        <option value={'b1'}>B1 - Medium</option>
                        <option value={'b2'}>B2 - Intermediate Advanced</option>
                        <option value={'c1'}>C1 - Advanced</option>
                        <option value={'c2'}>C2 - In perfection</option>
                    </select>
                </div>
                <div  className={styles.foreignLanguages}>
                    <input
                        id="foreign_languages"
                        type="text"
                        value={''}
                        onChange={(evt) => {handleChangeHHResumeData(evt, 'native_language')}}
                    />
                    <select name="" id="">
                        <option value={'a1'}>A1 - Initial</option>
                        <option value={'a2'}>A2 - Elementary</option>
                        <option value={'b1'}>B1 - Medium</option>
                        <option value={'b2'}>B2 - Intermediate Advanced</option>
                        <option value={'c1'}>C1 - Advanced</option>
                        <option value={'c2'}>C2 - In perfection</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default LanguageSkillsContainer;
