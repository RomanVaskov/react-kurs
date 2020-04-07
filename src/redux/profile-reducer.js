import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hello PHP", likesCount: 10 },
    { id: 2, message: "Hello PHP", likesCount: 11 },
    { id: 3, message: "Hello VUE", likesCount: 15 },
    { id: 4, message: "Hello REACT", likesCount: 17 }
  ],
  newPostText: "Hello World!!!",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
};

export const addPostItem = () => {
  return {
    type: ADD_POST
  };
};

export const onPostChange = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export const setUserProfile = profile => {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  };
};

export const setUserStatus = status => {
  return {
    type: SET_STATUS,
    status: status
  };
};

export const getUserProfile = (userId) => {
  return dispatch => {
    profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getUserStatus = (userId) => {
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setUserStatus(data));
    });
  }
}

export const updateUserStatus = (status) => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  }
}

export default profileReducer;