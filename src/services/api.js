//base da url = https://api.themoviedb.org/3/
//utiliza axios

//confif

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;