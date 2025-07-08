import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/user/'
});

export const getUsers = async () => usersApi.get();

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
export const loginUser = async (email, password) =>{
  const response = await usersApi.post('login/', { email, password });

  const {access} = response.data
  localStorage.setItem("accessToken", access);

  console.log(response.data)
  return response

}

export const registerUser = async (data) =>
  usersApi.post('register/', data);


usersApi.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.authorization = "JWT " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
