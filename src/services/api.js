 import axios from "axios";


 //criando uma instancia do axios
 const api = axios.create({
     baseURL: 'http://localhost:3000/api'
 });

 export default api;