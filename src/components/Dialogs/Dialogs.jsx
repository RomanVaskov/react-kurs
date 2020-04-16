import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogText from "./DialogText/DialogText";
import { Field, reduxForm } from "redux-form";

const Dialogs = ({ sendMessage, dialogsPage }) => {
  let state = dialogsPage;

  let dialogsElements = state.dialogsData.map((item) => {
    return <DialogItem name={item.name} id={item.id} key={item.id} />;
  });

  let messagesElements = state.messagesData.map((item) => {
    return <DialogText text={item.message} id={item.id} key={item.id} />;
  });

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
