import React from 'react';
import AmBrainLogo from '../../assets/images/AmBrainLogo.svg';
import DevelopersIcon from '../../assets/images/DevelopersTabIcon.svg';
import ContactUsIcon from '../../assets/images/ContactUsTabIcon.svg';
import ResumeIcon from '../../assets/images/ResumeTabIcon.svg';
import FeedbackIcon from '../../assets/images/FeedbackTabIcon.svg';
import styles from './leftDrawer.module.css';

function LeftDrawer () {
    const navigationTabs = [
        {
            icon: DevelopersIcon,
            title: 'Developers',
        },
        {
            icon: ContactUsIcon,
            title: 'Contact us',
        },
        {
            icon: ResumeIcon,
            title: 'Resume',
        },
        {
            icon: FeedbackIcon,
            title: 'Feedback',
        },
    ];

    return (
        <div className={styles.leftDrawerContent}>
            <img src={AmBrainLogo} alt={'AmBrainLogo'} />
            <div className={styles.tabsContent}>
                {
                    navigationTabs.map((item, idx) => {
                        return (
                            <div className={styles.tabsItem} key={idx}>
                                <img src={item.icon} alt={item.title}/>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LeftDrawer;