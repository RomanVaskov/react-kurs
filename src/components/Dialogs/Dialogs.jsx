import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";

const Dialogs = ({ state }) => {
  let dialogsElements = state.dialogsPage.dialogsData.map(item => {
    return <DialogItem name={item.name} id={item.id} key={item.id} />;
  });

  let messagesElements = state.dialogsPage.messagesData.map(item => {
    return <DialogText text={item.message} id={item.id} key={item.id} />;
  });

  let PostText = React.createRef();
  const addPost = () => {
    let text = PostText.current.value;
    alert(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
      <div>
        <textarea ref={PostText}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
  );
};

export default Dialogs;
