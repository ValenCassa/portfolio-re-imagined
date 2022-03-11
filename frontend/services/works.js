import axios from 'axios'
import { getCookie } from 'cookies-next'
export const baseURL = process.env.NEXT_PUBLIC_API_URL

const getToken = () => {
    const tokenCookie = JSON.parse(getCookie('user'))
    const token = `Bearer ${tokenCookie.token}`
    return token
}

const getAll = async (type) => {
    const response = await axios.get(`${baseURL}/${type}`)
    return response.data
}

const getOne = async ({id, type}) => {
    const response = await axios.get(`${baseURL}/${type}/${id}`)
    return response.data
}

const create = async ({data, type}) => {
    const token = getToken()

    const config = {
        headers: { 'Authorization': token, 'Content-Type': 'multipart/form-data' }
    }

    const response = await axios.post(`${baseURL}/${type}`, data, config)
    return response.data
}

const deleteAll = async (type) => {
    const token = getToken()

    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.post(`${baseURL}/${type}/reset`, {delete: 'delete'} ,  config)
    return response.data
}

const updateOne = async ({data, id, type}) => {
    const token = getToken()
    const config = {
        headers: { 'Authorization': token, 'Content-Type': 'multipart/form-data' }
    }

    const response = await axios.put(`${baseURL}/${type}/${id}`, data, config)

    return response.data
}

const deleteOne = async ({id, type}) => {
    const token = getToken()
    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.delete(`${baseURL}/${type}/${id}`, config)
    return response.data
}

export default {
    getAll,
    create,
    deleteAll,
    updateOne,
    getOne,
    deleteOne
}