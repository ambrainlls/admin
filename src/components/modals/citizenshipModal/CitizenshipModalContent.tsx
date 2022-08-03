import React, { useEffect, useState } from 'react';
import styles from './citizenshipModal.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux";

interface CitizenshipModalContentProps {
    handleClose: () => void;
    handleSave: (selectedCountriesIds: string[]) => void;
    countries: any
}

function CitizenshipModalContent({ handleSave, handleClose, countries }: CitizenshipModalContentProps) {
    const selectedIds = useSelector(
        (state: RootState) => state.hhResumeReducer.cv ? state.hhResumeReducer.cv.country_id : []
    );

    const [selectedCountryIds, setSelectedCountryIds] = useState<Set<string>>(new Set(selectedIds));
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelectCountry = (country: any) => {
        const updatedSelectedCountryIds: Set<string> = new Set(selectedCountryIds);

        if (updatedSelectedCountryIds.has(country.country_id)) {
          updatedSelectedCountryIds.delete(country.country_id);
        } else {
          updatedSelectedCountryIds.add(country.country_id);
        }

        setSelectedCountryIds(updatedSelectedCountryIds);
    };

    useEffect(() => {
        if (selectedCountryIds.size > 3) {
            setErrorMessage(`You can't have citizenship more than three !`);
            return;
        } else {
            setErrorMessage('');
        }

    }, [selectedCountryIds.size]);

    return (
        <div className={`${styles.countriesContainer} ${errorMessage ? styles.errorMessageContainer : ''}`}>
            {
                errorMessage && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                )
            }
            <div className={styles.modalComponentTitle}>
                <p>Choose your citizenship</p>
            </div>
            <div className={styles.countriesWrapper}>
                {
                    countries.map((country: any) => (
                        <div key={country.country_id} className={styles.countriesItem}>
                            <input id={country.country_id}
                                   type="checkbox"
                                   checked={selectedCountryIds.has(country.country_id)}
                                   onChange={() => handleSelectCountry(country)}
                            />
                            <label
                                htmlFor={country.country_id}
                                onChange={() => handleSelectCountry(country)}
                            >
                                {country.name}
                            </label>
                        </div>
                    ))
                }
            </div>
            <div className={styles.buttonsContent}>
                <button className={styles.closeBtn}
                        onClick={handleClose}
                >
                    Cancel
                </button>
                <button className={styles.saveBtn}
                        onClick={() => handleSave(Array.from(selectedCountryIds))}
                        disabled={selectedCountryIds.size > 3}
                >
                    Choose
                </button>
            </div>
        </div>
    );
}

export default CitizenshipModalContent;
