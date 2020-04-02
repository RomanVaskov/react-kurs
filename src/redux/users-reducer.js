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
  followingProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
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

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  };
};

export const unfollow = (userId) => {
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

export default usersReducer;