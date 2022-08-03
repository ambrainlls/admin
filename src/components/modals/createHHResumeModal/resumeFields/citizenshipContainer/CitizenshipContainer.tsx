import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import burgerIcon from '../../../../../assets/images/BurgerIcon.svg';
import deleteIcon from '../../../../../assets/images/actionIcons/delete.svg';
import styles from './citizenshipContainer.module.css';

interface CitizenshipContainerProps {
    handleShowModal: () => void;
    handleDeleteCountry: (id: string) => void;
}

function CitizenshipContainer({ handleShowModal, handleDeleteCountry }: CitizenshipContainerProps) {
    const selectedCountries = useSelector(
        (state: RootState) => state.hhResumeReducer.selectedCountries
    );

    return (
        <div className={styles.citizenshipDetailsItem}>
            <div className={styles.selectedCountriesContainer}>
                {
                    selectedCountries.map((country: any) => (
                        <div key={country.country_id} className={styles.countriesItem}>
                            {country.name}
                            <img src={deleteIcon} alt={deleteIcon}
                                 onClick={() => handleDeleteCountry(country.country_id)}
                            />
                        </div>
                    ))
                }
            </div>
            <img src={burgerIcon} alt={burgerIcon} onClick={handleShowModal} />
        </div>
    )
}

export default CitizenshipContainer;
