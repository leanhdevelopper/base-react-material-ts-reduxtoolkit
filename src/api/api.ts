import axios from 'axios';
import { toast } from 'react-toastify';

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Headers': 'X-Requested-With',
  },
  withCredentials: true,
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 400) {
      toast.error(error.response?.data?.message);
      return;
    }
    if (statusCode === 404) {
      toast.error(error.response?.data?.message);
      return;
    }
    if (statusCode === 401) {
      toast.error(error.response?.data?.message);
      return;
    }
    if (statusCode === 403) {
      toast.error(error.response?.data?.message);
      return;
    }
    if (statusCode === 500) {
      toast.error('Something went wrong, please try again!', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    throw error;
  },
);
export default API;
