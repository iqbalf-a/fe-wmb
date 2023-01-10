import axios from "axios";
import {getToken, removeToken} from "../utils/token";

const axiosInstance = axios.create({
    headers: {
        "Content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (config)=> config,
    (error) => {
        const responseError = error?.response?.data;
        if (responseError.code === "X06") {
            removeToken()
        }
        return Promise.reject(error)
    }
)

export default axiosInstance