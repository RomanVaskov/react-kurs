import React from "react";
import style from "./FriendItem.module.css";

const FriendItem = ({ id, name, img }) => {
  return (
    <div id={id} className={style.item}>
      <img src={img} alt="avatar" className={style.img} />
      <span>{name}</span>
    </div>
  );
};

export default FriendItem;
