import React, { ChangeEvent, useState } from 'react';
import searchIcon from '../../../assets/images/searchIcon.svg';
import styles from './filterComponent.module.css';

function FilterComponent () {
    const [filterValue, setFilterValue] = useState('');

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(evt.target.value)
    }

    return (
        <div className={styles.filterComponentWrapper}>
            <img src={searchIcon} alt={'searchIcon'}/>
            <input
                id="search"
                type="text"
                placeholder=""
                value={filterValue}
                onChange={handleChange}
            />
        </div>
    )
}
export default FilterComponent;