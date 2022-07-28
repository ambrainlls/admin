import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
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
                    <LeftDrawer />
                )
            }
            <div className={styles.dashboardBodyContainer}>
                <DashboardHeader
                    handleBurgerClick={toggleLeftDrawer}
                />
                <div className={styles.content}>
                   <Outlet />
                </div>
                <DashboardFooter />
            </div>
        </div>
    )
}
export default DashboardContainer;
