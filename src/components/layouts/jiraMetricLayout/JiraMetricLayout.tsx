import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux';
import { JiraUserHistoriesType } from '../../../redux/types';
import { setJiraUserHistories } from '../../../redux/slice/jiraMetricSlice';
import { JiraMetricApi } from '../../../api/JiraMetricApi';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import { formatNumber } from '../../../helpers/helpers';
import styles from './jiraMetricLayout.module.css';

function JiraMetricLayout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jiraUserHistories = useSelector((state: RootState) => state.jiraMetricReducer.jiraUserHistories);

    const columns = [
        {
            name: 'Username',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div onClick={() => {handleUsernameClick(Number(row.id))}}>{row.username}</div>
                )
            }
        },
        {
            name: 'Code Review',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{formatNumber(row.code_review)}</div>
                )
            }
        },
        {
            name: 'Rejected',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{formatNumber(row.rejected)}</div>
                )
            }
        },
    ];

    useEffect(() => {
        JiraMetricApi.getJiraMetrics()
            .then(res => {
                const { data } = res;
                dispatch(setJiraUserHistories(data));
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    }, []);

    const handleUsernameClick = (userId: number) => {
        navigate(`/jira-metric/${userId}`, {state: userId});
    };

    return (
        <div className={styles.jiraMetricContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
            </div>
            <DashboardDataTable columns={columns} data={jiraUserHistories} />
        </div>
    )
}
export default JiraMetricLayout;
