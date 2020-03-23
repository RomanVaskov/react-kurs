import React from "react";
import style from "./Users.module.css";

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        followed: true,
        fullName: "Alexey",
        status: "Work at home",
        location: { city: "Minsk", country: "Belarus" }
      },
      {
        id: 2,
        photoUrl:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        followed: true,
        fullName: "Roman",
        status: "Work at home",
        location: { city: "Donetsk", country: "DNR" }
      },
      {
        id: 3,
        photoUrl:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        followed: true,
        fullName: "Dmitry",
        status: "Work at home",
        location: { city: "Dubna", country: "Russia" }
      },
      {
        id: 4,
        photoUrl:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        followed: false,
        fullName: "Roman",
        status: "Work at home",
        location: { city: "Krasnoperekopsk", country: "Russia" }
      }
    ]);
  }
  return (
    <div>
      {props.users.map(u => {
        return (
          <div className={style.wrapper} key={u.id}>
            <span>
              <div>
                <img className={style.avatar} alt="img" src={u.photoUrl} />
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
