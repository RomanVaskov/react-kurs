const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 5, message: body }]
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody
  };
};

export default dialogsReducer;