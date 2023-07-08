import React from "react";
import "../Header.styles.scss";
import { IGlobalState } from "../../../models/interfaces";
import { useNavigate } from "react-router-dom";
import { WriteRoutes } from "../../../constants/routes";

export const HeaderProfile = (props: {
  globalState: IGlobalState;
  setGlobalState: any;
}) => {
  const { globalState, setGlobalState } = props;
  const [profileOpen, setProfileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setProfileOpen((prevValue) => !prevValue);
  };

  const handleSignOut = () => {
    navigate(WriteRoutes.SIGN_IN);
    setGlobalState((prevValue: IGlobalState) => ({
      ...prevValue,
      authenticated: false,
    }));
  };

  return (
    <div className="profile">
      <div className="profile__card" onClick={handleProfileClick}>
        <span className="material-icons">face</span>
        <span>{globalState.user.personal_details.name}</span>
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
