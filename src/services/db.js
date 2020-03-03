let rerenderEntireTree = () => {
  console.log("State changed")
}
let state = {
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
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: "Roma", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
      { id: 2, name: "Dima", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
      { id: 3, name: "Viktor", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;