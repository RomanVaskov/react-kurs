import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";
import { Redirect } from "react-router-dom";

const Dialogs = ({
  sendMessage,
  updateNewMessageBody,
  dialogsPage,
  isAuth
}) => {
  let state = dialogsPage;

  let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogsData.map(item => {
    return <DialogItem name={item.name} id={item.id} key={item.id} />;
  });

  let messagesElements = state.messagesData.map(item => {
    return <DialogText text={item.message} id={item.id} key={item.id} />;
  });

  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = e => {
    let body = e.target.value;
    updateNewMessageBody(body);
  };

  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }

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
