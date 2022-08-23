import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class JobsApi {
    static async getJobs () {
        return axios.get(
            `${url}/jobs`,
        );
    };
}