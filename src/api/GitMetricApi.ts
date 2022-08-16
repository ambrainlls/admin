import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class GitMetricApi {
    static async getGitMetrics () {
        return axios.get(
            `${url}/commits`,
        );
    };
}