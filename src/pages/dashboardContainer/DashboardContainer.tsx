import React, { useState } from 'react';
import LeftDrawer from '../leftDrawer/LeftDrawer';
import styles from './dashboardContainer.module.css';
import DashboardHeader from '../../components/main/dashboardHeader/DashboardHeader';
import DashboardFooter from '../../components/main/dashboardFooter/DashboardFooter';

function DashboardContainer () {
    const [showLeftDrawer, setShowLeftDrawer] = useState(false);
    const toggleLeftDrawer = () => {
        setShowLeftDrawer(!showLeftDrawer);
    };

    return (
        <div className={styles.dashboardContainer}>
            {
                showLeftDrawer && (
                    <LeftDrawer/>
                )
            }
            <div className={`${styles.dashboardBodyContainer} ${showLeftDrawer ? styles.dashboardWithLeftsideDrawerContainer : ''}`}>
                <DashboardHeader
                    handleBurgerClick={toggleLeftDrawer}
                />
                <DashboardFooter />
            </div>
        </div>
    )
}
export default DashboardContainer;
