import React from "react";
import "../Header.styles.scss";
import { EActions } from "../../../models/interfaces";
import { useGlobalState } from "../../../global/store";

export const HeaderProfile = () => {
  const { user, setGlobalState } = useGlobalState();

  const [profileOpen, setProfileOpen] = React.useState(false);

  const handleProfileClick = () => {
    setProfileOpen((prevValue) => !prevValue);
  };

  const handleSignOut = () => {
    setGlobalState({ type: EActions.UPDATE_AUTHENTICATION, payload: false });
  };

  return (
    <div className="profile">
      <div className="profile__card" onClick={handleProfileClick}>
        <span className="material-icons">face</span>
        <span>{user?.personal_details?.name}</span>
        <span
          className={`material-icons ml-1 transition-transform duration-150 ${
            profileOpen ? "flip-horizontal" : ""
          }`}
        >
          expand_more
        </span>
      </div>
      <div
        className={`profile__menu  ${profileOpen ? "profile__menu--open" : ""}`}
      >
        <span onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
  );
};
