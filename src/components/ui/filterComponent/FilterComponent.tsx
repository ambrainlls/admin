import React, { ChangeEvent, useRef, useState } from 'react';
import searchIcon from '../../../assets/images/searchIcon.svg';
import styles from './filterComponent.module.css';

interface FilterComponentProps {
    handleSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function FilterComponent ({ handleSearch }: FilterComponentProps) {
    const inputRef = useRef() as React.RefObject<HTMLDivElement>;
    const [filterValue, setFilterValue] = useState('');

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(evt.target.value);
        handleSearch(evt);
    };

    return (
        <div className={styles.filterComponentWrapper} ref={inputRef}>
            <img src={searchIcon} alt={'searchIcon'} />
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
