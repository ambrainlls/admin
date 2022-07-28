import React, { useState } from 'react';
import LeftDrawer from '../leftDrawer/LeftDrawer';
import DashboardHeader from '../../components/main/dashboardHeader/DashboardHeader';
import DashboardFooter from '../../components/main/dashboardFooter/DashboardFooter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Developers from '../developers/Developers';
import ContactUs from '../contactUs/ContactUs';
import Resume from '../resume/Resume';
import Feedback from '../feedback/Feedback';
import styles from './dashboardContainer.module.css';

function DashboardContainer () {
    const [showLeftDrawer, setShowLeftDrawer] = useState(false);
    const activeTab = useSelector((state: RootState) => state.leftDrawerReducer.activeTab);
    const toggleLeftDrawer = () => {
        setShowLeftDrawer(!showLeftDrawer);
    };

    return (
        <div className={`${styles.dashboardBodyContainer} ${showLeftDrawer ? styles.dashboardWithLeftsideDrawerContainer : ''}`}>
            <DashboardHeader
                handleBurgerClick={toggleLeftDrawer}
            />
            <div className={styles.dashboardBodyContent}>
                <div className={styles.leftDrawerContent}>
                    {
                        showLeftDrawer && (
                            <LeftDrawer/>
                        )
                    }
                </div>
                <div
                    className={
                    `${styles.activeTabContent}
                    ${showLeftDrawer ? styles.activeTabContentWithLeftDrawer : styles.activeTabContentWithoutLeftDrawer}`}
                >
                    {
                        activeTab === 'Developers' && (
                            <Developers/>
                        )
                    }
                    {
                        activeTab === 'Contact us' && (
                            <ContactUs/>
                        )
                    }
                    {
                        activeTab === 'Resume' && (
                            <Resume/>
                        )
                    }
                    {
                        activeTab === 'Feedback' && (
                            <Feedback/>
                        )
                    }
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
}
export default DashboardContainer;
