import React, { useState } from 'react';
import LeftDrawer from '../leftDrawer/LeftDrawer';
import DashboardHeader from '../../components/main/dashboardHeader/DashboardHeader';
import DashboardFooter from '../../components/main/dashboardFooter/DashboardFooter';
import styles from './dashboardContainer.module.css';

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
            <div className={`${showLeftDrawer ? styles.dashboardWithLeftsideDrawerContainer : ''}`}>
                <DashboardHeader
                    handleBurgerClick={toggleLeftDrawer}
                />
                <DashboardFooter />
            </div>
        </div>
    )
}
export default DashboardContainer;
