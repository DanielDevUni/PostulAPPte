import axios from 'axios';

const offersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/offer/'
});

export const getOffers = async () => offersApi.get()