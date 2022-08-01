import axios from 'axios';
import { ContactUsTypes } from '../redux/types';

const url = process.env.REACT_APP_API_URL;

export class ContactUsApi {
    static async getAllContacts() {
        return axios.get(
            `${url}/contactus`,
        );
    };

    static async createContact(params: ContactUsTypes) {
        return axios.post(
            `${url}/contactus`,
            {params}
        );
    };

    static async deleteContact(id: string) {
        return axios.delete(
            `${url}/contactus/${id}`,

        );
    };

    static async updateContact(params: ContactUsTypes) {
        return axios.put(
            `${url}/contactus`,
            {params}
        );
    };
}
