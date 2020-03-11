const UPDATE_FRIENDS = "UPDATE_FRIENDS";

let initialState = {
  friends: [
    { id: 1, name: "Roma", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
    { id: 2, name: "Dima", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
    { id: 3, name: "Viktor", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
  ]
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FRIENDS:
      return state;

    default:
      return state;
  }
}

export const friendsCreator = () => {
  return {
    type: UPDATE_FRIENDS
  };
};

export default sidebarReducer;