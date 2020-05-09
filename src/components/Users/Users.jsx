import React from "react";
import Pagination from "../common/paginator/Pagination";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Pagination {...props} />
      {props.users.map((u) => {
        return <User user={u} {...props} />;
      })}
    </div>
  );
};

export default Users;
