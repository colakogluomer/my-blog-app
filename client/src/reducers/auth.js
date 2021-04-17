import * as types from "../actions/types";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case types.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
