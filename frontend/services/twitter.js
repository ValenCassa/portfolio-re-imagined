import axios from 'axios'
const apiURL = process.env.NEXT_PUBLIC_API_URL

export const fetchTwitter = async () => {
    const followers = await axios.get(`${apiURL}/twitter`)

    return followers.data
}