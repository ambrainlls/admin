import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { JiraUserHistoriesType } from '../../../redux/types';
import { setJiraUserHistories } from '../../../redux/slice/jiraMetricSlice';
import { JiraMetricApi } from '../../../api/JiraMetricApi';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import styles from './jiraMetricLayout.module.css';

function JiraMetricLayout () {
    const dispatch = useDispatch();
    const jiraUserHistories = useSelector((state: RootState) => state.jiraMetricReducer.jiraUserHistories);

    const columns = [
        {
            name: 'Username',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{row.username}</div>
                )
            }
        },
        {
            name: 'Code Review',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{row.code_review}</div>
                )
            }
        },
        {
            name: 'Rejected',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{row.rejected}</div>
                )
            }
        },
    ]
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
    return (
        <div className={styles.jiraMetricContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent/>
            </div>
            <DashboardDataTable columns={columns} data={jiraUserHistories} />
        </div>
    )
}
export default JiraMetricLayout;