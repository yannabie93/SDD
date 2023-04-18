import axios from 'axios'

//export const BASE_URL = "http://localhost:3000/api"
export const BASE_URL = "https://api-ppsconline.onrender.com/api"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const employees1Request = axios.create({
    baseURL: `${BASE_URL}/employees`
})

export const students1Request = axios.create({
    baseURL: `${BASE_URL}/students`
})

export const faculty1Request = axios.create({
    baseURL: `${BASE_URL}/faculty`
})

export const usersRequest = axios.create({
    baseURL : `${BASE_URL}/users`
})

export const authRequest = axios.create({
    baseURL : `${BASE_URL}/auth`
})

export const resultRequest = axios.create({
    baseURL : `${BASE_URL}/results`
})
