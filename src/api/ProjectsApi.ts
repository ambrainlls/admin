import axios from 'axios';
import { CreateProjectTypes } from "../redux/types";

const url = process.env.REACT_APP_API_URL;

export class ProjectsApi {
    static async getAllProjects() {
        return axios.get(
            `${url}/projects`,
        );
    };

    static async updateProject(data: CreateProjectTypes) {
        return axios.put(
            `${url}/projects/${data.id}`,
            data
        );
    };

    static async createProject(data: CreateProjectTypes) {
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
