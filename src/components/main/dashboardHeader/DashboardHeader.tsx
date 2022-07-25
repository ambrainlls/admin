import React from 'react';
import burgerIcon from '../../../assets/images/BurgerIcon.svg';
import styles from './dashboardHeader.module.css';

interface DashboardHeaderProps {
    handleBurgerClick: () => void;
}

function DashboardHeader({ handleBurgerClick }: DashboardHeaderProps){
    return (
        <div className={styles.dashboardHeaderContainer}>
            <div className={styles.dashboardBurgerContainer} onClick={handleBurgerClick}>
                <img src={burgerIcon} alt={burgerIcon} />
            </div>
        </div>
    )
}
 export default DashboardHeader;
