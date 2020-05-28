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
  try {
    Promise.all([dispatch(authUser())]).then(() => {
      dispatch(setInitialized());
    })
  } catch (error) {
    console.log(error)
  }
}

export default appReducer;