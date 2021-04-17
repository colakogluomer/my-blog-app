import axios from "axios";

const apiEndPoint = "http://localhost:5000/";

export const createPost = async (post) => await axios.post(apiEndPoint, post);
export const fetchPosts = async () => await axios.get(apiEndPoint);
export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndPoint}${id}`);

export const signIn = async (formData) =>
  await axios.post(`${apiEndPoint}admin`, formData);
