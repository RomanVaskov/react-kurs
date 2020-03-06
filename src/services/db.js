const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello PHP", likesCount: 10 },
        { id: 2, message: "Hello PHP", likesCount: 11 },
        { id: 3, message: "Hello VUE", likesCount: 15 },
        { id: 4, message: "Hello REACT", likesCount: 17 }
      ],
      newPostText: "Hello World!!!"
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Роман" },
        { id: 2, name: "Алексей" },
        { id: 3, name: "Дмитрий" },
        { id: 4, name: "Роман" }
      ],
      messagesData: [
        { id: 1, message: "PHP" },
        { id: 2, message: "PHP" },
        { id: 3, message: "VUE" },
        { id: 4, message: "REACT" }
      ],
      newMessageBody: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Roma", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
        { id: 2, name: "Dima", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
        { id: 3, name: "Viktor", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
      ]
    }
  },
  _callSubscriber() {
    console.log("State changed")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messagesData.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    }
  }
}

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

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

export default store;
window.store = store;