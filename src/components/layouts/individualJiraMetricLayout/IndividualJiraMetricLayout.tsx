import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setJiraUserHistory } from '../../../redux/slice/jiraMetricSlice';
import { formatNumber } from '../../../helpers/helpers';
import { RootState } from '../../../redux';
import { JiraMetricApi } from '../../../api/JiraMetricApi';
import { JiraUserHistoriesType } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import styles from './individualJiraMetricLayout.module.css';

function IndividualJiraMetricLayout () {
    const dispatch = useDispatch();
    const { id } = useParams();

    const jiraUserHistory = useSelector((state: RootState) => state.jiraMetricReducer.jiraUserHistory);

    const columns = [
        {
            name: 'ID',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{row.id}</div>
                )
            }
        },
        {
            name: 'Account ID',
            cell: (row: JiraUserHistoriesType) => {
                return (
                    <div>{row.account_id}</div>
                )
            }
        },
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
        JiraMetricApi.getJiraMetricById(Number(id))
            .then(res => {
                const data = res.data;
                dispatch(setJiraUserHistory(data));
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    }, []);

    return (
        <div>
            <DashboardDataTable
                columns={columns}
                data={[jiraUserHistory]}
            />
        </div>
    )
}
export default IndividualJiraMetricLayout;