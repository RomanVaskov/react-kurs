const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hello PHP", likesCount: 10 },
    { id: 2, message: "Hello PHP", likesCount: 11 },
    { id: 3, message: "Hello VUE", likesCount: 15 },
    { id: 4, message: "Hello REACT", likesCount: 17 }
  ],
  newPostText: "Hello World!!!"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;

    case UPDATE_NEW_POST_TEXT:
      let copyState = { ...state };
      copyState.newPostText = action.newText;
      return copyState;

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export default profileReducer;