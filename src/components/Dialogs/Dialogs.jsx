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
  return <div className={style.message}>{props.text}</div>;
};

const Dialogs = props => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Роман" id="1" />
        <DialogItem name="Алексей" id="2" />
        <DialogItem name="Дмитрий" id="3" />
        <DialogItem name="Роман" id="4" />
      </div>
      <div className={style.messages}>
        <DialogText text="PHP" />
        <DialogText text="PHP" />
        <DialogText text="VUE" />
        <DialogText text="React" />
      </div>
    </div>
  );
};

export default Dialogs;
