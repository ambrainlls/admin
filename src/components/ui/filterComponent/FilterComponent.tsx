import React, { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchParams } from '../../../redux/slice/SearchParamsSlice';
import searchIcon from '../../../assets/images/searchIcon.svg';
import styles from './filterComponent.module.css';

function FilterComponent () {
    const dispatch = useDispatch();
    const inputRef = useRef() as React.RefObject<HTMLDivElement>;
    const [filterValue, setFilterValue] = useState('');

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(evt.target.value);
        if (evt.target.value === '') {
            dispatch(setSearchParams(' '));
        } else {
            dispatch(setSearchParams(evt.target.value));
        }
    }

    return (
        <div className={styles.filterComponentWrapper} ref={inputRef}>
            <img src={searchIcon} alt={'searchIcon'}/>
            <input
                id="search"
                type="text"
                placeholder=""
                value={filterValue}
                onChange={(evt) => {handleChange(evt)}}
            />
        </div>
    )
}
export default FilterComponent;