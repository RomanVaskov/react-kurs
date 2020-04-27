import { authAPI } from "../api/api";
import { authUser } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};

export const setInitialized = () => {
  return {
    type: SET_INITIALIZED
  };
};

export const initializeApp = () => (dispatch) => {
  authAPI.setAuthUser().then(data => {
    if (data.resultCode === 0) {
      Promise.all([dispatch(authUser())]).then(() => {
        dispatch(setInitialized());
      })
    }
  });
}

export default appReducer;