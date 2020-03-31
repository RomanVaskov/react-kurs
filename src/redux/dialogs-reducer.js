const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 5, message: body }]
      };

    default:
      return state;
  }
};

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBody = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

export default dialogsReducer;