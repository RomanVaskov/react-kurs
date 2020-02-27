import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.profile_img}
          src="https://avatars.mds.yandex.net/get-pdb/872807/b0063fc9-3867-4519-afab-a58301f66aa7/s1200"
          alt="Природа"
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
