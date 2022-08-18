import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGitUserHistory } from '../../../redux/slice/gitMetricSlice';
import { formatNumber } from '../../../helpers/helpers';
import { RootState } from '../../../redux';
import { GitMetricApi } from '../../../api/GitMetricApi';
import { GitUserHistoriesType } from '../../../redux/types';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import styles from './individualGitMetricLayout.module.css';

function IndividualGitMetricLayout () {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const gitUserHistory = useSelector((state: RootState) => state.gitMetricReducer.gitUserHistory);

    const columns = [
        {
            name: 'User ID',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{row.user_id}</div>
                )
            }
        },
        {
            name: 'Username',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{row.user_name}</div>
                )
            }
        },
        {
            name: 'Project Name',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{row.project_name}</div>
                )
            }
        },
        {
            name: 'Addition',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{formatNumber(row.addition)}</div>
                )
            }
        },
        {
            name: 'Changed',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{formatNumber(row.changed)}</div>
                )
            }
        },
        {
            name: 'Deletion',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div>{formatNumber(row.deletion)}</div>
                )
            }
        },
    ];

    useEffect(() => {
        GitMetricApi.getGitMetricById(Number(userId))
            .then(res => {
                const data = res.data[0];
                dispatch(setGitUserHistory(data));
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
                data={[gitUserHistory]}
            />
        </div>
    )
}
export default IndividualGitMetricLayout;