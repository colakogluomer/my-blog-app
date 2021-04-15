import * as api from "../api/index";
import * as types from "./types";

export const fetchPosts = () => async (dispatch) => {
  try {
    console.log("geldi");
    const { data } = await api.fetchPosts();
    dispatch({
      type: types.FETCH_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
