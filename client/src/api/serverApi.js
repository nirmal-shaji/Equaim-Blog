import axios from 'axios';


const api = axios.create({ baseURL: "http://localhost:5000" })

export const createBlog=(data)=> api.post('/api/v1/', data);
export const getAllBlog = ()=>api.get('/api/v1/');
export const showBlog = (id)=>api.get(`/api/v1/blog/${id}`);