import React from "react";
import Friends from "./Friends";
// import { friendsCreator } from "../../../redux/sidebar-reducer";
import StoreContext from "../../../StoreContext";

const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        return <Friends state={store.getState().sidebar} />;
      }}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;
