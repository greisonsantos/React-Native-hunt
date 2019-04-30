 import axios from "axios";


 //criando uma instancia do axios
 const api = axios.create({
     baseURL: 'http://192.168.56.1:3000/api'
 });

 export default api;