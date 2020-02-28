import React from "react";
import style from "../Dialogs.module.css";

const DialogText = props => {
  return (
    <div className={style.message} id={props.id}>
      {props.text}
    </div>
  );
};

export default DialogText;
