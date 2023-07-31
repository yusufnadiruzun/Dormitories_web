import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5002/api",
    //baseURL:"http://16.171.153.153:5002/api",
    Headers: {
        "Content-Type": "application/json",
    },
    
});

export default api;