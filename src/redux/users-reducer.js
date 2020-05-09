import { usersApi } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const CONTENT_LOADING = "CONTENT_LOADING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
  fake: 10
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case CONTENT_LOADING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching ?
          [...state.followingProgress, action.userId] :
          state.followingProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: CONTENT_LOADING,
    isFetching: isFetching
  };
};

export const setFollowingProgress = (isFetching, userId) => {
  return {
    type: FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
  };
};

export const getUsers = (currentPage, pageSize) => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount / 100));
  }
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setFollowingProgress(true, id));
  let data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setFollowingProgress(false, id));
}

export const follow = (id) => {
  return async dispatch => {
    let apiMethod = usersApi.getUsersFollow.bind(usersApi);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  }
}

export const unfollow = (id) => {
  return async dispatch => {
    let apiMethod = usersApi.getUsersUnfollow.bind(usersApi);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  }
}

export default usersReducer;