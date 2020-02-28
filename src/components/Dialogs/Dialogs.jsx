import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = props => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const DialogText = props => {
  return (
    <div className={style.message} id={props.id}>
      {props.text}
    </div>
  );
};

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: "Роман" },
    { id: 2, name: "Алексей" },
    { id: 3, name: "Дмитрий" },
    { id: 4, name: "Роман" }
  ];

  let dialogsElements = dialogsData.map(item => {
    return <DialogItem name={item.name} id={item.id} />;
  });

  let messagesData = [
    { id: 1, message: "PHP" },
    { id: 2, message: "PHP" },
    { id: 3, message: "VUE" },
    { id: 4, message: "REACT" }
  ];

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
