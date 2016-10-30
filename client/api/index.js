import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listHellos() {
        return axios.get(`${apiPrefix}/hellos`);
    },

    createHello(data) {
        return axios.post(`${apiPrefix}/hellos`, data);
    },

    deleteHello(helloId) {
        return axios.delete(`${apiPrefix}/hellos/${helloId}`);
    }
}
