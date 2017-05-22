import axios from 'axios';

exports.getData = (url) => {
    return axios.get(url);
};