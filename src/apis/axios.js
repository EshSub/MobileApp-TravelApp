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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU2OTE5MzU4LCJpYXQiOjE3MjUzODMzNTgsImp0aSI6ImVkMjdmMGMwMjY0OTQ1OWI5ZmNjZjFjMGQxMzliMTg5IiwidXNlcl9pZCI6MX0.ilkURvG_hgPqHinjvHnfOV-Aa7da6ffWRpihySv5HtM"; //selectAccessToken(state);
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
