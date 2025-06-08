import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

//Get Posts Requests
export const fetchPosts = async () => {
    try {
        const {data} = await axios.get(`${API_URL}?_limit=10`);
        return data;
    } catch (error) {
        console.log(error)
    }
};
//Update Post Request
export const updatePost = async (id, updatePost) => {
    try {
        const {data} = await axios.put(`${API_URL}/${id}`, updatePost);
        return data;
    } catch (error) {
       console.log(error) 
    }
};
//Delete Post Request
export const deletePost = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
};
//Create Post Request
export const createPost = async (newPost) => {
    try {
        const {data} = await axios.post(API_URL, newPost);
        return data;
    } catch (error) {
        console.log(error);
    }
};