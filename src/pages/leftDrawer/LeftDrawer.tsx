import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/slice/leftDrawerSlice';
import { RootState } from '../../redux';
import AmBrainLogo from '../../assets/images/AmBrainLogo.svg';
import DevelopersIcon from '../../assets/images/DevelopersTabIcon.svg';
import ContactUsIcon from '../../assets/images/ContactUsTabIcon.svg';
import ResumeIcon from '../../assets/images/ResumeTabIcon.svg';
import FeedbackIcon from '../../assets/images/FeedbackTabIcon.svg';
import ProjectsTabIcon from '../../assets/images/ProjectsTabIcon.svg';
import MetricTabIcon from '../../assets/images/MetricTabIcon.svg';
import JobsTabIcon from '../../assets/images/JobsTabIcon.svg';
import styles from './leftDrawer.module.css';

interface NavigationTabsTypes {
    icon: string;
    title: string;
    route: string;
}

function LeftDrawer () {
    const dispatch = useDispatch();

    const navigationTabs: NavigationTabsTypes[] = [
        {
            icon: DevelopersIcon,
            title: 'Employees',
            route: '/employees'
        },
        {
            icon: ContactUsIcon,
            title: 'Contact us',
            route: '/contact-us'
        },
        {
            icon: ResumeIcon,
            title: 'Resume',
            route: '/resume',
        },
        {
            icon: FeedbackIcon,
            title: 'Feedback',
            route: '/feedback',
        },
        {
            icon: ProjectsTabIcon,
            title: 'Projects',
            route: '/projects',
        },
        {
            icon: MetricTabIcon,
            title: 'Metric',
            route: '/metric',
        },
        {
            icon: JobsTabIcon,
            title: 'Jobs',
            route: '/jobs'
        }
    ];

    const activeTab = useSelector((state: RootState) => state.leftDrawerReducer.activeTab);

    const handleActiveTab = (title: string) => {
        dispatch(setActiveTab(title));
    };

    return (
        <div className={styles.leftDrawerContent}>
            <Link className={styles.dashboardLogo} to={'/'}
                  onClick={() => handleActiveTab('Employees')}
            >
                <img src={AmBrainLogo} alt={'AmBrainLogo'} />
            </Link>
            <div className={styles.tabsContent}>
                {
                    navigationTabs.map((item, idx) => {
                        return (
                            <Link className={`${styles.tabsItem} ${activeTab === item.title ? styles.activeTabContainer : ''}`}
                                  key={idx}
                                  to={item.route}
                                  onClick={() => handleActiveTab(item.title)}
                            >
                                <img src={item.icon} alt={item.title} />
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LeftDrawer;
