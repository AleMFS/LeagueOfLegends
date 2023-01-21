import axios from "axios";

export const api = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/pt_BR/champion',
})
