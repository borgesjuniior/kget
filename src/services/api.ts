import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instagram.com/',
  headers: {         
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/jsonp;charset=UTF-8"                   
  },
  proxy: {
    host: '104.236.174.88',
    port: 3128
  },

})

export default api;