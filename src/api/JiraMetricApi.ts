import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class JiraMetricApi {
    static async getJiraMetrics () {
        return axios.get(
            `${url}/jira`,
        );
    };

    static async getJiraMetricById (id: number) {
        return axios.get(
            `${url}/jira/${id}`,
        );
    };
}