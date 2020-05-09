import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
  };
};

export const authUser = () => async (dispatch) => {
  let data = await authAPI.setAuthUser()
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const Login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(authUser());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    let action = stopSubmit("login", { _error: message });
    dispatch(action);
  }
}

export const Logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;