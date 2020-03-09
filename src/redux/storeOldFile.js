import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;