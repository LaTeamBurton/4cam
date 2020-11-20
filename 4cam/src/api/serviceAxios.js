import axios from 'axios'

const baseUrl = 'http://localhost:3000'
const serviceAxios = {
    getMarkets() {
        return axios.get(`${baseUrl}/markets`)
    }
}

export default serviceAxios