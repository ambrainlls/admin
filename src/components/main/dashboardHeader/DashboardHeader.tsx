import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import burgerIcon from '../../../assets/images/BurgerIcon.svg';
import styles from './dashboardHeader.module.css';

interface DashboardHeaderProps {
    handleBurgerClick: () => void;
}

function DashboardHeader({ handleBurgerClick }: DashboardHeaderProps) {
    const activeTab = useSelector((state: RootState) => state.leftDrawerReducer.activeTab);

    return (
        <div className={styles.dashboardHeaderContainer}>
            <div className={styles.dashboardBurgerContainer}
                 onClick={handleBurgerClick}
            >
                <img src={burgerIcon} alt={burgerIcon} />
            </div>
            <div className={styles.activeTabNameContainer}>
              { activeTab }
            </div>
        </div>
    )
}
 export default DashboardHeader;
