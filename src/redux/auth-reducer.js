import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case GET_CAPTCHA_URL:
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL,
    payload: { captchaUrl }
  };
};

export const authUser = () => async (dispatch) => {
  let data = await authAPI.setAuthUser();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const Login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(authUser());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }

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