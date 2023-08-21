import axios from "axios";
console.log(import.meta.env.VITE_ACCESS_KEY)
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.defaults.params = {}
axios.defaults.params['access_key'] = import.meta.env.VITE_ACCESS_KEY;

export default axios;