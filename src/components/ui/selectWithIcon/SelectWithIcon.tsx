import React, { useRef, useState, useEffect } from 'react';
import selectArrow from '../../../assets/images/arrowRightIcon.svg';
import styles from './selectWithIcon.module.css';

interface SelectWithIconProps {
    handleOptionClick: (selectedOption: any) => void;
    selectedOption: any;
    options: any[];
}

function SelectWithIcon({
    selectedOption,
    handleOptionClick,
    options,
}: SelectWithIconProps) {
    const selectRef = useRef() as React.RefObject<HTMLDivElement>;

    const [selectOptions, setSelectOptions] = useState<any[]>(options);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setSelectOptions(options);
    }, [options]);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleClick = (selectedOption: any) => {
        handleOptionClick(selectedOption);
        setShowOptions(false);
    };

    return (
        <div ref={selectRef} className={`${styles.selectContainer}`}>
            <div className={styles.selectContent}>
                {
                    selectedOption && (
                        <div className={styles.selectedParamsContainer}>
                            <div className={styles.selectedOption}>
                                <span className={styles.selectedOptionTitle}>
                                    {selectedOption}
                                </span>
                            </div>
                        </div>
                    )
                }
                <div className={`${styles.selectIcon} ${!options.length ? styles.disabledOptions : ""} `}>
                    <img src={selectArrow} alt={selectArrow}
                         onClick={toggleOptions}
                         className={`${styles.showOptions ? styles.arrowDown : ''}`}
                    />
                </div>
            </div>
            {
                showOptions && selectOptions.length ? (
                    <div className={styles.optionsContainer}>
                        {
                            selectOptions.map((option, i) => {
                                return (
                                    <div key={i}
                                         onClick={()=>handleClick(option)}
                                         className={`${styles.option}${styles.option}${i}`}
                                    >
                                        {option}
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}
export default SelectWithIcon;