import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";

const Dialogs = ({ dialogsData, messagesData }) => {
  let dialogsElements = dialogsData.map(item => {
    return <DialogItem name={item.name} id={item.id} />;
  });

  let messagesElements = messagesData.map(item => {
    return <DialogText text={item.message} id={item.id} />;
  });

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
