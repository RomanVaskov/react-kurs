import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../services/db";

const Dialogs = ({ state, dispatch }) => {
  let dialogsElements = state.dialogsPage.dialogsData.map(item => {
    return <DialogItem name={item.name} id={item.id} key={item.id} />;
  });

  let messagesElements = state.dialogsPage.messagesData.map(item => {
    return <DialogText text={item.message} id={item.id} key={item.id} />;
  });

  let newMessageBody = state.dialogsPage.newMessageBody;

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = e => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Add Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
