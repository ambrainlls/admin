import React from 'react';
import HomePageLayout from '../../components/layouts/homePageLayout/HomePageLayout';
import styles from './homePage.module.css';

function HomePage(){
    return (
        <div className={styles.homePageContainer}>
           <HomePageLayout />
        </div>
    )
}

export default HomePage;

