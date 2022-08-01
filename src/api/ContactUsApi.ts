import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export class ContactUsApi {
    static async getAllContacts() {
        return axios.get(
            `${url}/contactus`,
            {
            },
        );
    };
}
