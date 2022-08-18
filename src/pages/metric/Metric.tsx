import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import DashboardSelect from '../../components/ui/dashboardSelect/DashboardSelect';
import JiraMetricLayout from '../../components/layouts/jiraMetricLayout/JiraMetricLayout';
import GitMetricLayout from '../../components/layouts/gitMetricLayout/GitMetricLayout';
import styles from './metric.module.css';

function Metric () {
    const metricType = useSelector((state: RootState) => state.metricReducer.metricType);
    const metricOptions = [
        'Git metric',
        'Jira metric',
    ];

    return (
        <div className={styles.gitMetricLayout}>
            <div className={styles.metricSelectWrapper}>
                <span className={styles.metricSelectWrapperTitle}>Choose which metric to show</span>
                <DashboardSelect
                    label={'Metric types'}
                    options={metricOptions}
                    disable={false}
                />
            </div>
            {
                metricType === 'Git metric' && (
                    <GitMetricLayout/>
                )
            }
            {
                metricType === 'Jira metric' && (
                    <JiraMetricLayout/>
                )
            }
        </div>
    )
}
export default Metric;