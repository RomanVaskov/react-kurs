import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../../assets/img/spinner.svg";
import usersPhoto from "../../../assets/img/user.png";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  const onChangePhotoProfile = (e) => {
    if (e.target.files.length) {
      console.log(e.target.files[0]);
      return props.profilePhoto(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <img alt="img" src={Preloader} />;
  }

  return (
    <div>
      <img
        className={style.userImg}
        src={
          !props.profile.photos.small ? usersPhoto : props.profile.photos.small
        }
        alt="avatar"
      />
      <div>
        {props.isOwner && <input type="file" onChange={onChangePhotoProfile} />}
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <div>
        <div>Name: {props.profile.fullName}</div>
        <div>About Me: {props.profile.aboutMe}</div>
        <div>About Job: {props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
