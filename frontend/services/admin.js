import axios from 'axios'
import { baseURL } from './works'

const login = async credentials => {
    const response = await axios.post(`https://backend-portfolio-cassa.herokuapp.com/api/login`, credentials)
    return response.data
}

export default login