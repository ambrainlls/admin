import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class ProjectsApi {
    static async getAllProjects() {
        return axios.get(
            `${url}/projects`,
        );
    };
}
