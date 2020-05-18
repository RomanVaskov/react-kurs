import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../../assets/img/spinner.svg";
import usersPhoto from "../../../assets/img/user.png";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { ProfileDataForm } from "./ProfileDataForm";
import { reduxForm } from "redux-form";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onChangePhotoProfile = (e) => {
    if (e.target.files.length) {
      return props.profilePhoto(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <img alt="img" src={Preloader} />;
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

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
      {editMode ? (
        <ProfileDataFormRedux
          {...props}
          onSubmit={onSubmit}
          initialValues={props.profile}
        />
      ) : (
        <ProfileData {...props} goToEditMode={() => setEditMode(true)} />
      )}
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Name:</b> {props.profile.fullName}
      </div>
      <div>
        <b>About Me:</b> {props.profile.aboutMe}
      </div>
      <div>
        <b>About my job:</b> {props.profile.lookingForAJob}
      </div>
      <div>
        <b>About my skills:</b> {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

const ProfileDataFormRedux = reduxForm({ form: "profileDataForm" })(
  ProfileDataForm
);

export default ProfileInfo;
