import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || "Hello World"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
