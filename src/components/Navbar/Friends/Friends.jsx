import React from "react";
import FriendItem from "./FriendItem/FriendItem";

const Friends = ({ state }) => {
  let friend = state.friends.map(item => {
    return (
      <FriendItem
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.avatar}
      />
    );
  });
  return <>{friend}</>;
};

export default Friends;
