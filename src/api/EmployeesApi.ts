import axios from 'axios';
import { EmployeesDataTypes } from '../redux/types';

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

    static async updateEmployee(data: EmployeesDataTypes) {
        return axios.put(
            `${url}/employees/${data.id}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    };

    static async createEmployee(data: EmployeesDataTypes) {
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
