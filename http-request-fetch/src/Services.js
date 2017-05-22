import axios from 'axios';

exports.getData = (url) => {
    return fetch(url);
};

exports.dataFromServer = (url) => {
    return axios(url);
}