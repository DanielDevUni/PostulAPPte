import axios from 'axios';

const offersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/offer/'
});

export const getOffers = async () => offersApi.get()

// Crear una nueva oferta 
export const createOffer = async (formData) => {
    return await offersApi.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};