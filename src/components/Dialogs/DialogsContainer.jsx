import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ state, dispatch }) => {
  let dialogsData = state.dialogsPage.dialogsData;
  let messagesData = state.dialogsPage.messagesData;
  let newMessageBody = state.dialogsPage.newMessageBody;

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = body => {
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      newMessageBody={newMessageBody}
      messagesData={messagesData}
      dialogsData={dialogsData}
      sendMessage={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
    />
  );
};

export default DialogsContainer;
