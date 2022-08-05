import React, { useRef, useState, useEffect } from 'react';
import arrowUp from '../../../assets/images/arrowUpIcon.svg';
import arrowDown from '../../../assets/images/arrowDownIcon.svg';
import deleteIcon from '../../../assets/images/delete.svg';
import styles from './multiSelectForProjects.module.css';

interface MultiSelectProps {
    options: any[];
    handleSelectedOptions: (selectedOptionIds: string[]) => void;
    selectedOptions: any[];
}

function MultiSelectForProjects({ options, handleSelectedOptions, selectedOptions }: MultiSelectProps) {
    const multiSelectRef = useRef() as React.RefObject<HTMLDivElement>;

    const [showOptions, setShowOptions] = useState(false);
    const [selectedParams, setSelectedParams] = useState<any[]>( selectedOptions);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (multiSelectRef.current && !multiSelectRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [multiSelectRef]);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const isChecked = (item: any) => {
        const checkedItem = selectedParams.find(el => el.id === item.id);

        return !!checkedItem;
    };

    const handleOptionClick = (option: any) => {
        const foundOption = selectedParams.find((elem) => elem.id === option.id);
        let filteredSelectedParams = [ ...selectedParams ];

        if (foundOption) {
            filteredSelectedParams = selectedParams.filter((item) => {
                return option.id !== item.id;
            });
        } else {
            filteredSelectedParams.push(option)
        }

        setSelectedParams(filteredSelectedParams);

        const selectedOptionIds = filteredSelectedParams.map(item => item.id);
        handleSelectedOptions(selectedOptionIds);
    };

    return (
        <div className={styles.multiSelectContainer} ref={multiSelectRef}>
            <div className={styles.multiSelectContent}>
                <div className={styles.selectedParamsContainer} data-test={'selectedOptions'}>
                    {
                        selectedParams.map(option => {
                            if (isChecked(option)) {
                                return (
                                     <div key={option.id + option.company_name} className={styles.selectedOption}>
                                         <span className={styles.selectedOptionTitle}>{option.company_name}</span>
                                         <img src={deleteIcon} alt={deleteIcon}
                                              className={styles.removeSelectedOptionIcon}
                                              onClick={()=>handleOptionClick(option)}
                                         />
                                     </div>
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.multiSelectIcon}>
                    {
                        showOptions ? (
                            <img src={arrowUp} alt={arrowUp}
                                 onClick={toggleOptions}
                                 data-test={'selectArrow'}
                            />
                        ) : (
                            <img src={arrowDown} alt={arrowDown}
                                 onClick={toggleOptions}
                                 data-test={'selectArrow'}
                            />
                        )
                    }
                </div>
            </div>
            {
                showOptions && (
                    <div className={styles.optionsContainer} data-test={'optionsContainer'}>
                        {
                            options.map((option) => {
                                const {id, company_name} = option;
                                return (
                                    <div key={id}
                                         onClick={()=>handleOptionClick(option)}
                                         className={`${styles.options} ${isChecked(option) ? styles.active : ""}` }
                                    >
                                        <label htmlFor={id}>{company_name}</label>
                                        <input type="checkbox"
                                               onChange={() =>{}}
                                               id={id}
                                               checked={isChecked(option)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
export default MultiSelectForProjects;

