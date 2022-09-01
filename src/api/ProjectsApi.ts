import axios from 'axios';
import { ProjectTypes } from '../redux/types';

const url = process.env.REACT_APP_API_URL;

export class ProjectsApi {
    static async getAllProjects() {
        return axios.get(
            `${url}/projects`,
        );
    };

    static async updateProject(data: ProjectTypes) {
        return axios.put(
            `${url}/projects/${data.id}`,
            data
        );
    };

    static async createProject(data: ProjectTypes) {
        return axios.post(
            `${url}/projects`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    };

    static async deleteProject(id: string) {
        return axios.delete(
            `${url}/projects/${id}`,
        );
    };
}
