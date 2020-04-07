import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../../assets/img/spinner.svg";
import usersPhoto from "../../../assets/img/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <img alt="img" src={Preloader} />;
  }
  return (
    <div>
      {/* <div>
        <img
          className={style.profile_img}
          src="https://avatars.mds.yandex.net/get-pdb/872807/b0063fc9-3867-4519-afab-a58301f66aa7/s1200"
          alt="Природа"
        />
      </div> */}
      <div>
        <img
          className={style.userImg}
          src={
            !props.profile.data.photos.small
              ? usersPhoto
              : props.profile.data.photos.small
          }
          alt="avatar"
        />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <div>
          <div>Name: {props.profile.data.fullName}</div>
          <div>About Me: {props.profile.data.aboutMe}</div>
          <div>About Job: {props.profile.data.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
