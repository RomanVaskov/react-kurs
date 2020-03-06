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
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({ id: 5, message: body });
      return state;

    default:
      return state;
  }
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

export default dialogsReducer;