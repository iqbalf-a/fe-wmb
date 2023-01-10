import api from "../config/api";
import {saveToken} from "../utils/token";

export const login = async (data) => {
    try {
        const response = await api.post("/auth/login", data)
        const token = response?.data?.data;
        if (token) {
            saveToken({token})
        }
    } catch (e) {
        console.error(e)
    }
}