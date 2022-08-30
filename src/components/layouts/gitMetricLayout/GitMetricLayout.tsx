import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux';
import { GitUserHistoriesType } from '../../../redux/types';
import { setGitUserHistories } from '../../../redux/slice/gitMetricSlice';
import { GitMetricApi } from '../../../api/GitMetricApi';
import FilterComponent from '../../ui/filterComponent/FilterComponent';
import DashboardDataTable from '../../main/dashboardDataTable/DashboardDataTable';
import { formatNumber } from '../../../helpers/helpers';
import styles from './gitMetricLayout.module.css';

function GitMetricLayout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gitUserHistories = useSelector((state: RootState) => state.gitMetricReducer.gitUserHistories);

    const columns = [
        {
            name: 'Username',
            cell: (row: GitUserHistoriesType) => {
                return (
                    <div onClick={() => {handleUsernameClick(Number(row.user_id))}}>{row.user_name}</div>
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
        GitMetricApi.getGitMetrics()
            .then(res => {
                const { data } = res;
                dispatch(setGitUserHistories(data));
            })
            .catch(err => {
                if (err) {
                    throw err;
                }
            });
    }, []);

    const handleUsernameClick = (userId: number) => {
        navigate(`/git-metric/${userId}`, {state: userId});
    };

    return (
        <div className={styles.gitMetricContainer}>
            <div className={styles.filterWrapper}>
                <FilterComponent
                    handleSearch={() => {}}
                />
            </div>
            <DashboardDataTable columns={columns} data={gitUserHistories} />
        </div>
    )
}
export default GitMetricLayout;
