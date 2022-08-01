import React, { useState } from 'react';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import deleteRowIcon from '../../../assets/images/dashboardDataTable/deleteRowIcon.svg';
import editRowIcon from '../../../assets/images/dashboardDataTable/editRowIcon.svg';
import createRowIcon from '../../../assets/images/createRowIcon.svg';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import styles from './developersLayout.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../../redux/slice/createDeveloperModalSlice';
import CreateDeveloperModalComponent from '../../Modals/createDeveloperModal/CreateDeveloperModalComponent';

function DevelopersLayout(){
    const dispatch = useDispatch();
    const [isShow, setShow] = useState(false);

    const toggleModal = () => {
        setShow(true);
        dispatch(setIsOpen(true));
    }
    const columns = [
        {
            name: 'Name',
            cell: (row: any) => {
                return (
                    <div>
                        {row.name}
                    </div>
                )
            }
        },
        {
            name: 'Surname',
            cell: (row: any) => {
                return (
                    <div>
                        {row.surname}
                    </div>
                )
            }
        },
        {
            name: 'Developer',
            cell: (row: any) => {
                return (
                    <div>
                        {row.developer}
                    </div>
                )
            }
        },
        {
            name: 'Beginning',
            cell: (row: any) => {
                return (
                    <div>
                        {row.beginning}
                    </div>
                )
            }
        },
        {
            name: 'Job title',
            cell: (row: any) => {
                return (
                    <div>
                        {row.jobTitle}
                    </div>
                )
            }
        },
        {
            name: '',
            cell: (row: any) => {
                return (
                    <div className={styles.btnsWrapper}>
                        <img
                            src={deleteRowIcon}
                            alt={'deleteRowIcon'}
                            className={styles.deleteRowIcon}
                        />
                        <img
                            src={editRowIcon}
                            alt={'editRowIcon'}
                        />
                    </div>
                )
            }
        }
    ];

    const data = [
        {
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },{
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },{
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },{
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },{
            name: 'Artur',
            surname: 'Harutyunyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Mihran',
            surname: 'Minasyan',
            developer: 'DevOps engineer',
            beginning: '12.07.2020',
            jobTitle: 'Founder',
        },
        {
            name: 'Armen',
            surname: 'Asatryan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Tatev',
            surname: 'Grigoryan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Team Lead',
        },
        {
            name: 'Hovhannes',
            surname: 'Aleksanyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'TeamLead',
        },
        {
            name: 'Karlen',
            surname: 'Levonyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Vahe',
            surname: 'Amiraghyan',
            developer: 'Full Stack Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Narek',
            surname: 'Sargsyan',
            developer: 'Backend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        },
        {
            name: 'Sona',
            surname: 'Babaxanyan',
            developer: 'Frontend Developer',
            beginning: '12.07.2020',
            jobTitle: 'Developer',
        }
    ];

    return (
        <div className={styles.developersContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent/>
                <img src={createRowIcon} alt={'createRowIcon'} className={styles.createRowIcon} onClick={toggleModal}/>
            </div>
            {
                isShow && (
                    <CreateDeveloperModalComponent/>
                )
            }
           <DashboardDataTable
               columns={columns}
               data={data}
           />
        </div>
    )
}

export default DevelopersLayout;

