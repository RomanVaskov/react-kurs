import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import usersPhoto from "../../assets/img/user.png";
import * as axios from "axios";

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
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "1a1f9c33-2508-475a-aadd-c89b7fa5fc8d"
                            }
                          }
                        )
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "1a1f9c33-2508-475a-aadd-c89b7fa5fc8d"
                            }
                          }
                        )
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
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
