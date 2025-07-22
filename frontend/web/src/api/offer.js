import axios from 'axios';

const offersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/offer/'
});

// Obtener todas las ofertas
export const getOffers = async () => offersApi.get()

// Crear una nueva oferta 
export const createOffer = async (formData) => {
    return await offersApi.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};

// ✅ CORREGIDO: Actualizar una oferta existente
export const updateOffer = async (id, formData) => {
  return await offersApi.put(`/${id}/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
};

// Obtener una oferta por su ID
export const getOfferById = async (id) => {
  return await offersApi.get(`/${id}/`);
};