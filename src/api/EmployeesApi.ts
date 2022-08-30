import axios from 'axios';
import { CreateEmployeesDataTypes } from '../redux/types';

const url = process.env.REACT_APP_API_URL;

export class EmployeesApi {

    static async getAllEmployees(query?: string) {
        if (query) {
            return axios.get(
                `${url}/employees${query}`,
            );
        } else {
            return axios.get(
                `${url}/employees`,
            );
        }
    };

    static async updateEmployee(data: CreateEmployeesDataTypes) {
        return axios.put(
            `${url}/employees/${data.id}`,
            data
        );
    };

    static async createEmployee(data: CreateEmployeesDataTypes) {
        return axios.post(
            `${url}/employees`,
                data,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    };

    static async deleteEmployee(id: string) {
        return axios.delete(
            `${url}/employees/${id}`,
        );
    };
}
