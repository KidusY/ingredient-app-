import axios from 'axios';
const baseURL = 'www.themealdb.com/api/json/v1/1'
export const searchByName = async (name:string) =>{
    return axios.get(`https://${baseURL}/search.php?s=${name}`)
}
