import React, { Component } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsFetchingAC
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../assets/img/spinner.svg";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount / 100);
      });
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img alt="img" src={Preloader} />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setIsFetching: isFetching => {
      dispatch(setIsFetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
