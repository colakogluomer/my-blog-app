import * as api from "../api/index";
import * as types from "./types";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: types.AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
