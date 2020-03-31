import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import usersPhoto from "../../assets/img/user.png";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(item => {
          return (
            <span
              className={props.currentPage === item && style.selectedPage}
              onClick={() => {
                props.onPageChange(item);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
      {props.users.map(u => {
        return (
          <div className={style.wrapper} key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    className={style.avatar}
                    alt="img"
                    src={u.photos.small !== null ? u.photos.small : usersPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
