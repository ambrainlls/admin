import axios from 'axios';
import { JobsType } from '../redux/types';

const url = process.env.REACT_APP_API_URL;

export class JobsApi {
    static async getJobs (query?: string) {
        if (query) {
            return axios.get(
                `${url}/jobs${query}`,
            );
        } else {
            return axios.get(
                `${url}/jobs`,
            );
        }
    };

    static async createJob(data: JobsType) {
        return axios.post(
            `${url}/jobs`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'processData': false,
                }
            }
        );
    };

    static async updateJob(data: JobsType) {
        return axios.put(
            `${url}/jobs/${data.id}`,
            data
        );
    };

    static async deleteJob(id: string) {
        return axios.delete(
            `${url}/jobs/${id}`,
        );
    };
}
