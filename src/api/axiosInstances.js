import axios from 'axios';
const api = axios.create({
    baseURL: "https://mini-shop-29a51-default-rtdb.europe-west1.firebasedatabase.app/"
});
export default api;