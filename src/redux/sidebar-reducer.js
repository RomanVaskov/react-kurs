let initialState = {
  friends: [
    { id: 1, name: "Roma", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
    { id: 2, name: "Dima", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
    { id: 3, name: "Viktor", avatar: "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
  ]
}

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;