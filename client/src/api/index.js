import axios from "axios";

const apiEndPoint = "http://localhost:5000/";

export const fetchPosts = async () => await axios.get(apiEndPoint);
export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndPoint}${id}`);
