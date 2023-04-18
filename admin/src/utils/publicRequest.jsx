import axios from 'axios'

//export const BASE_URL = "http://localhost:3000/api"
export const BASE_URL = "https://api-ppsconline.onrender.com/api"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

