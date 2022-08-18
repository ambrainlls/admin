import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class GitMetricApi {
    static async getGitMetrics () {
        return axios.get(
            `${url}/commits`,
        );
    };

    static async getGitMetricById (userId: number) {
        return axios.get(
            `${url}/commits/${userId}`,
        );
    };
}