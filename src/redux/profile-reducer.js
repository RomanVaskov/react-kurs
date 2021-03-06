import {
  profileAPI
} from "../api/api";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [{
    id: 1,
    message: "Hello PHP",
    likesCount: 10
  },
  {
    id: 2,
    message: "Hello PHP",
    likesCount: 11
  },
  {
    id: 3,
    message: "Hello VUE",
    likesCount: 15
  },
  {
    id: 4,
    message: "Hello REACT",
    likesCount: 17
  }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost]
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id !== action.postId)
      }

    default:
      return state;
  }
};

export const addPostItem = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText: newPostText
  };
};

export const deletePostItem = (postId) => {
  return {
    type: DELETE_POST,
    postId: postId
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

export const savePhotoSuccess = photos => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos: photos
  };
};

export const getUserProfile = (userId) => {
  return async dispatch => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
  }
}

export const getUserStatus = (userId) => {
  return async dispatch => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
  }
}

export const updateUserStatus = (status) => {
  return async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  }
}

export const profilePhoto = (file) => {
  return async dispatch => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      try {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        let action = stopSubmit("profileDataForm", { _error: message });
        dispatch(action);
        try {
          return Promise.reject(new Error(message));
        } catch (error) {
          throw error
        }
      } catch (error) {
        console.error(error)
      }

    }
  }
}

export default profileReducer;