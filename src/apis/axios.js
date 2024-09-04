import ax from "axios";
import { store } from "../redux/store";
import { BACKEND_URL } from "../helpers/constants";
import { selectAccessToken } from "../redux/slices/userSlice";

// export default axios.create({ baseURL: 'https://4c32-192-248-2-10.ngrok-free.app/'});
// export const baseUrl='https://4c32-192-248-2-10.ngrok-free.app/'

const authAxios = ax.create({ baseURL: BACKEND_URL });

authAxios.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU2OTc2MTg3LCJpYXQiOjE3MjU0NDAxODcsImp0aSI6IjkzNDNjYjNkMDVhODRlMjFhZWUzY2VlMGI0MmZhOTNmIiwidXNlcl9pZCI6Mn0.S1s9k8vR2EG0TdhgKiKRgvbFQeG0M1lxdGSxElZRHJk"; //selectAccessToken(state);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;
