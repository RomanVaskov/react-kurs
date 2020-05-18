import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";

export const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.isOwner && (
        <div>
          <button>Save</button>
        </div>
      )}
      {props.error && (
        <div className={style.formSummeryError}>{props.error}</div>
      )}
      <div>
        <b>Name:</b> {createField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>About Me:</b> {createField("About Me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>About my job:</b>{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>About my skills:</b>{" "}
        {createField(
          "About my skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};
