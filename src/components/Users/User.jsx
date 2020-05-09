import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import usersPhoto from "../../assets/img/user.png";

const User = ({ user, ...props }) => {
  return (
    <div className={style.wrapper} key={user.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={style.avatar}
              alt="img"
              src={user.photos.small !== null ? user.photos.small : usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={props.followingProgress.some((id) => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingProgress.some((id) => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
