import axios from "axios";
import { useState } from "../services";

const {state} = useState()

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${state.token}`
    return config
})

export default axiosClient