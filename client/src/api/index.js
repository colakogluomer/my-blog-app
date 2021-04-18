import axios from "axios";

const apiEndPoint = "http://localhost:5000/";

axios.create({ baseURL: apiEndPoint }).interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorizaton = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    } `;
  }
});

export const createPost = async (post) => await axios.post(apiEndPoint, post);
export const fetchPosts = async () => await axios.get(apiEndPoint);
export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndPoint}${id}`);

export const signIn = async (formData) =>
  await axios.post(`${apiEndPoint}admin`, formData);
export const updatePost = async (id, updatedPost) =>
  await axios.patch(`${apiEndPoint}${id}`, updatedPost);
export const deletePost = async (id) =>
  await axios.delete(`${apiEndPoint}${id}`);
